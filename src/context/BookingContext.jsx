import React, { createContext, useContext, useState, useEffect } from 'react';
import { SERVICES, STYLISTS } from '../data/services';
import { calculateTotals, generateBookingRef, formatTimeSlot, getMinDateString } from '../utils/pricing';

const BookingContext = createContext(null);

const STORAGE_KEY = 'sm_home_beauty_bookings';

export function BookingProvider({ children }) {
  // 1. Service Selection State (persist across page navigation)
  const [selectedServiceIds, setSelectedServiceIds] = useState(() => {
    try {
      const saved = sessionStorage.getItem('sm_selected_services');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save selected services to session storage for persistence across tabs/navigation
  useEffect(() => {
    try {
      sessionStorage.setItem('sm_selected_services', JSON.stringify(selectedServiceIds));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [selectedServiceIds]);

  // 2. Preferences State
  const [serviceLocation, setServiceLocation] = useState('Salon'); // 'Salon' | 'At Home'
  const [preferredStylist, setPreferredStylist] = useState('Any Available');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  // 3. Customer Info State
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  // 4. Stepper State (1: Services, 2: Preferences, 3: Customer Info, 4: Request Confirmation)
  const [currentStep, setCurrentStep] = useState(1);
  const [confirmedRequest, setConfirmedRequest] = useState(null);

  // 5. Booking History State (Stored in localStorage)
  const [bookingHistory, setBookingHistory] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bookingHistory));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }, [bookingHistory]);

  // Derived: Selected full service objects
  const selectedServices = SERVICES.filter(s => selectedServiceIds.includes(s.id));

  // Derived: Financial totals
  const totals = calculateTotals(selectedServices, serviceLocation);

  // Service toggle helpers
  const toggleService = (serviceId) => {
    setSelectedServiceIds(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const addService = (serviceId) => {
    setSelectedServiceIds(prev =>
      prev.includes(serviceId) ? prev : [...prev, serviceId]
    );
  };

  const removeService = (serviceId) => {
    setSelectedServiceIds(prev => prev.filter(id => id !== serviceId));
  };

  const clearServices = () => {
    setSelectedServiceIds([]);
  };

  const isServiceSelected = (serviceId) => selectedServiceIds.includes(serviceId);

  // Quick book helper for hero section
  const initiateQuickBooking = (serviceId, dateStr) => {
    if (serviceId) {
      setSelectedServiceIds([serviceId]);
    }
    if (dateStr) {
      setAppointmentDate(dateStr);
    }
    setCurrentStep(2);
  };

  // Submit appointment request
  const submitAppointmentRequest = () => {
    const bookingRef = generateBookingRef();
    const formattedTime = !isNaN(Number(appointmentTime))
      ? formatTimeSlot(appointmentTime)
      : appointmentTime;

    const requestRecord = {
      id: bookingRef,
      createdAt: new Date().toISOString(),
      name: customerInfo.name.trim(),
      phone: customerInfo.phone.trim(),
      address: serviceLocation === 'At Home' ? customerInfo.address.trim() : '',
      notes: customerInfo.notes.trim(),
      location: serviceLocation,
      stylist: preferredStylist,
      date: appointmentDate,
      time: formattedTime,
      services: selectedServices.map(s => ({
        id: s.id,
        name: s.name,
        price: s.price,
        durationMinutes: s.durationMinutes,
      })),
      subtotal: totals.subtotal,
      homeFee: totals.homeFee,
      total: totals.grandTotal,
      durationMinutes: totals.totalMinutes,
      status: 'Pending Concierge Confirmation',
      isDemoRequest: true,
    };

    setConfirmedRequest(requestRecord);
    setBookingHistory(prev => [requestRecord, ...prev]);
    setCurrentStep(4);
    return requestRecord;
  };

  // Cancel booking from history
  const cancelBookingRequest = (requestId) => {
    setBookingHistory(prev => prev.filter(item => item.id !== requestId));
  };

  // Reset booking for a new one
  const startNewBooking = () => {
    setSelectedServiceIds([]);
    setAppointmentDate('');
    setAppointmentTime('');
    setServiceLocation('Salon');
    setPreferredStylist('Any Available');
    setCustomerInfo({ name: '', phone: '', address: '', notes: '' });
    setConfirmedRequest(null);
    setCurrentStep(1);
  };

  const value = {
    selectedServiceIds,
    selectedServices,
    isServiceSelected,
    toggleService,
    addService,
    removeService,
    clearServices,
    serviceLocation,
    setServiceLocation,
    preferredStylist,
    setPreferredStylist,
    appointmentDate,
    setAppointmentDate,
    appointmentTime,
    setAppointmentTime,
    customerInfo,
    setCustomerInfo,
    currentStep,
    setCurrentStep,
    confirmedRequest,
    totals,
    bookingHistory,
    submitAppointmentRequest,
    cancelBookingRequest,
    startNewBooking,
    initiateQuickBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

import React, { createContext, useContext, useState, useEffect } from 'react';
import { SERVICES, PACKAGES, STYLISTS } from '../data/services';
import { calculateTotals, generateBookingRef, formatTimeSlot, getMinDateString, formatAED } from '../utils/pricing';

const BookingContext = createContext(null);

const STORAGE_KEY = 'sm_home_beauty_bookings';
const SELECTED_SERVICES_KEY = 'sm_selected_services';
const SELECTED_PACKAGE_KEY = 'sm_selected_package';

export function BookingProvider({ children }) {
  // 1. Service Selection State (persist across page navigation)
  const [selectedServiceIds, setSelectedServiceIds] = useState(() => {
    try {
      const saved = sessionStorage.getItem(SELECTED_SERVICES_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // 1b. Package Selection State (Supports Points Packages 1, 2, 3, 6 and Fixed Packages)
  const [selectedPackage, setSelectedPackage] = useState(() => {
    try {
      const saved = sessionStorage.getItem(SELECTED_PACKAGE_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Save state to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(SELECTED_SERVICES_KEY, JSON.stringify(selectedServiceIds));
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [selectedServiceIds]);

  useEffect(() => {
    try {
      if (selectedPackage) {
        sessionStorage.setItem(SELECTED_PACKAGE_KEY, JSON.stringify(selectedPackage));
      } else {
        sessionStorage.removeItem(SELECTED_PACKAGE_KEY);
      }
    } catch (e) {
      console.warn('Storage error:', e);
    }
  }, [selectedPackage]);

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

  // 4. Stepper State (1: Services/Packages, 2: Preferences, 3: Customer Info, 4: Request Confirmation)
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

  // Combine services and selected package into unified item list for totals
  const allSelectedItems = [
    ...selectedServices,
    ...(selectedPackage ? [{
      id: selectedPackage.id,
      name: selectedPackage.name,
      price: selectedPackage.price,
      durationMinutes: selectedPackage.durationMinutes || 90,
      isPackage: true,
      isPointsPackage: selectedPackage.type === 'points',
      totalPoints: selectedPackage.totalPoints,
      usedPoints: selectedPackage.usedPoints || 0,
      selectedPackageServices: selectedPackage.selectedPackageServices || [],
      includedServices: selectedPackage.includedServices || []
    }] : [])
  ];

  // Derived: Financial totals (AED, homeFee = 0)
  const totals = calculateTotals(allSelectedItems, serviceLocation);

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
    // If it's a package removal
    if (selectedPackage && selectedPackage.id === serviceId) {
      setSelectedPackage(null);
      return;
    }
    setSelectedServiceIds(prev => prev.filter(id => id !== serviceId));
  };

  const clearServices = () => {
    setSelectedServiceIds([]);
    setSelectedPackage(null);
  };

  const isServiceSelected = (serviceId) => selectedServiceIds.includes(serviceId);

  // Package Management Helpers
  const selectPackage = (pkg) => {
    if (!pkg) {
      setSelectedPackage(null);
      return;
    }
    if (pkg.type === 'points') {
      setSelectedPackage({
        ...pkg,
        selectedPackageServices: [],
        usedPoints: 0,
        remainingPoints: pkg.totalPoints,
      });
    } else {
      setSelectedPackage({
        ...pkg,
        selectedPackageServices: [],
        usedPoints: 0,
        remainingPoints: 0,
      });
    }
  };

  const clearPackage = () => {
    setSelectedPackage(null);
  };

  /**
   * Toggle a service inside a points package
   * Enforces that points do not exceed the package totalPoints
   */
  const togglePackageService = (serviceItem) => {
    if (!selectedPackage || selectedPackage.type !== 'points') return { success: false, reason: 'No points package active' };

    const currentServices = selectedPackage.selectedPackageServices || [];
    const alreadySelected = currentServices.some(s => s.id === serviceItem.id);

    if (alreadySelected) {
      // Remove service
      const updated = currentServices.filter(s => s.id !== serviceItem.id);
      const used = updated.reduce((sum, s) => sum + (Number(s.points) || 0), 0);
      setSelectedPackage(prev => ({
        ...prev,
        selectedPackageServices: updated,
        usedPoints: used,
        remainingPoints: prev.totalPoints - used
      }));
      return { success: true, action: 'removed' };
    } else {
      // Check points limit
      const currentUsed = selectedPackage.usedPoints || 0;
      const needed = Number(serviceItem.points) || 0;
      if (currentUsed + needed > selectedPackage.totalPoints) {
        return {
          success: false,
          reason: `Adding "${serviceItem.name}" (${needed} pts) exceeds your ${selectedPackage.totalPoints}-point package allowance (${currentUsed} used, ${selectedPackage.totalPoints - currentUsed} remaining).`
        };
      }
      const updated = [...currentServices, serviceItem];
      const used = currentUsed + needed;
      setSelectedPackage(prev => ({
        ...prev,
        selectedPackageServices: updated,
        usedPoints: used,
        remainingPoints: prev.totalPoints - used
      }));
      return { success: true, action: 'added' };
    }
  };

  // Quick book helper for hero section
  const initiateQuickBooking = (serviceId, dateStr) => {
    if (serviceId) {
      const isPkg = PACKAGES.find(p => p.id === serviceId);
      if (isPkg) {
        selectPackage(isPkg);
      } else {
        setSelectedServiceIds([serviceId]);
      }
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
      services: allSelectedItems,
      selectedPackage: selectedPackage ? {
        id: selectedPackage.id,
        name: selectedPackage.name,
        price: selectedPackage.price,
        type: selectedPackage.type,
        totalPoints: selectedPackage.totalPoints,
        usedPoints: selectedPackage.usedPoints,
        selectedPackageServices: selectedPackage.selectedPackageServices,
        includedServices: selectedPackage.includedServices
      } : null,
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
    setSelectedPackage(null);
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
    selectedPackage,
    selectPackage,
    clearPackage,
    togglePackageService,
    allSelectedItems,
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
import React, { useEffect } from 'react';
import { useBooking } from '../context/BookingContext';
import BookingStepper from '../components/booking/BookingStepper';
import BookingSummary from '../components/booking/BookingSummary';
import BookingStepServices from '../components/booking/BookingStepServices';
import BookingStepPreferences from '../components/booking/BookingStepPreferences';
import BookingStepCustomer from '../components/booking/BookingStepCustomer';
import BookingStepConfirmation from '../components/booking/BookingStepConfirmation';
import BookingHistorySection from '../components/booking/BookingHistorySection';
import SectionHeading from '../components/common/SectionHeading';

export default function Booking() {
  const {
    currentStep,
    setCurrentStep,
    submitAppointmentRequest,
  } = useBooking();

  // Scroll to top when changing steps
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  return (
    <div className="flex-1 pt-28 sm:pt-32 pb-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Bespoke Experience"
          title="Reserve Your"
          italicTitle="Appointment"
          subtitle="Choose your beauty treatments, select your desired studio or home venue, and dispatch your formal booking request directly to our concierge."
        />

        {/* Stepper Navigation */}
        <BookingStepper
          currentStep={currentStep}
          onStepClick={(step) => setCurrentStep(step)}
        />

        {/* Main 2-Column Booking Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Active Step Form */}
          <div className="lg:col-span-8 bg-white border border-beige p-6 sm:p-8 rounded-sm shadow-luxury">
            {currentStep === 1 && (
              <BookingStepServices onNext={() => setCurrentStep(2)} />
            )}

            {currentStep === 2 && (
              <BookingStepPreferences
                onBack={() => setCurrentStep(1)}
                onNext={() => setCurrentStep(3)}
              />
            )}

            {currentStep === 3 && (
              <BookingStepCustomer
                onBack={() => setCurrentStep(2)}
                onSubmit={submitAppointmentRequest}
              />
            )}

            {currentStep === 4 && (
              <BookingStepConfirmation />
            )}
          </div>

          {/* Right Column: Sticky Reservation Summary */}
          <div className="lg:col-span-4">
            <BookingSummary showEditControls={currentStep === 1} />
          </div>
        </div>

        {/* Local Demo Booking History Records */}
        <BookingHistorySection />
      </div>
    </div>
  );
}

import React from 'react';
import { Check } from 'lucide-react';

export default function BookingStepper({ currentStep = 1, onStepClick }) {
  const steps = [
    { number: 1, label: 'Services', desc: 'Select Treatments' },
    { number: 2, label: 'Preferences', desc: 'Date, Time & Venue' },
    { number: 3, label: 'Details', desc: 'Client Information' },
    { number: 4, label: 'Request', desc: 'Dispatch & Review' },
  ];

  return (
    <div className="w-full mb-10">
      <div className="grid grid-cols-4 gap-2 sm:gap-4">
        {steps.map((step) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isClickable = isCompleted && onStepClick;

          return (
            <button
              key={step.number}
              type="button"
              disabled={!isClickable}
              onClick={() => isClickable && onStepClick(step.number)}
              className={`flex flex-col items-center sm:items-start text-left p-3 sm:p-4 border transition-all duration-300 relative ${
                isCurrent
                  ? 'bg-espresso text-ivory border-gold shadow-md'
                  : isCompleted
                  ? 'bg-white text-darkText border-gold/40 hover:border-gold cursor-pointer'
                  : 'bg-white/60 text-mutedText border-beige/80 cursor-not-allowed opacity-70'
              }`}
            >
              {/* Top Accent Line */}
              <div
                className={`absolute top-0 left-0 right-0 h-[2px] ${
                  isCurrent ? 'bg-gold' : isCompleted ? 'bg-gold/60' : 'bg-transparent'
                }`}
              />

              <div className="flex items-center gap-2 mb-1">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-sans font-bold ${
                    isCurrent
                      ? 'bg-gold text-espresso'
                      : isCompleted
                      ? 'bg-gold/20 text-gold-deep border border-gold/50'
                      : 'bg-beige text-mutedText'
                  }`}
                >
                  {isCompleted ? <Check className="w-3 h-3 stroke-[2.5]" /> : step.number}
                </div>
                <span className={`text-[10px] font-sans uppercase tracking-[0.2em] font-semibold hidden sm:inline ${
                  isCurrent ? 'text-gold' : 'text-darkText'
                }`}>
                  Step {step.number}
                </span>
              </div>

              <div className={`font-serif text-sm sm:text-base font-semibold leading-tight ${
                isCurrent ? 'text-ivory' : isCompleted ? 'text-espresso' : 'text-mutedText'
              }`}>
                {step.label}
              </div>

              <div className="text-[10px] text-mutedText font-light hidden md:block mt-0.5">
                {step.desc}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

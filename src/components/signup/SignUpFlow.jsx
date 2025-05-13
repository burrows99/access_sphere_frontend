import React, { useState, useEffect, useRef } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import SetupComplete from './SetupComplete';

const SignUpFlow = () => {
  const containerRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentStep]);
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    { id: 1, label: "Welcome" },
    { id: 2, label: "Admin Account" },
    { id: 3, label: "MFA Setup" },
    { id: 4, label: "Authentication" },
    { id: 5, label: "Customization" },
  ];

  const handleNext = () => {
    if (currentStep === steps.length) {
      setIsComplete(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    if (isComplete) {
      return <SetupComplete />;
    }

    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleNext} />;
      case 2:
        return <Step2 onNext={handleNext} onPrevious={handlePrevious} />;
      case 3:
        return <Step3 onNext={handleNext} onPrevious={handlePrevious} />;
      case 4:
        return <Step4 onNext={handleNext} onPrevious={handlePrevious} />;
      case 5:
        return <Step5 onNext={handleNext} onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  if (isComplete) {
    return renderStep();
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-sphere-grey-light flex flex-col overflow-y-auto">
      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-8 pt-4 pb-6 flex-none">
      <div className="relative flex justify-between h-10">
          {/* Progress Lines */}
          <div className="absolute inset-0 flex items-center">
                <div className="w-full flex items-center px-12" aria-hidden="true">
                  <div className="h-0.5 w-full bg-sphere-grey-light">
                    <div
                      className="h-0.5 bg-sphere-blue-dark transition-all duration-500"
                      style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                  </div>
                </div>
          </div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col items-center relative w-16 sm:w-28 lg:w-36">
              <div className="bg-sphere-grey-light p-1 relative z-10">
                <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full border-2 text-sm font-medium ${index + 1 < currentStep ? 'border-sphere-blue-dark bg-sphere-blue-dark text-white' : index + 1 === currentStep ? 'border-sphere-blue-dark text-sphere-blue-dark' : 'border-sphere-grey-light text-sphere-grey-dark bg-white'}`}
                >
                  {step.id}
                </div>
              </div>
              <div
                className={`text-[8px] sm:text-xs lg:text-sm mt-1 sm:mt-2 text-center w-full leading-tight ${currentStep >= step.id ? 'text-sphere-blue-dark font-medium' : 'text-sphere-grey-dark'}`}
              >
                {step.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="flex-grow overflow-auto px-4 sm:px-6 lg:px-8 py-4">
        {renderStep()}
      </div>
    </div>
  );
};

export default SignUpFlow;

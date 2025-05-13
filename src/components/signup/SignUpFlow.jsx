import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import SetupComplete from './SetupComplete';

const SignUpFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
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
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Progress Bar */}
      <div className="max-w-3xl mx-auto px-2 sm:px-6 lg:px-8 pt-4 pb-6 flex-none">
      <div className="relative flex justify-between">
          {/* Progress Lines */}
          <div className="absolute top-4 left-0 right-0 flex justify-center">
            <div className="w-full flex justify-between px-2 sm:px-8 lg:px-16">
              {steps.slice(0, -1).map((_, index) => (
                <div
                  key={index}
                  className={`h-[2px] w-full ${currentStep > index + 1 ? 'bg-blue-900' : 'bg-gray-200'}`}
                />
              ))}
            </div>
          </div>

          {/* Steps */}
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center relative w-16 sm:w-28 lg:w-36">
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-sm sm:text-base font-medium z-10 ${currentStep >= step.id ? 'bg-blue-900 border-blue-900 text-white' : 'bg-white border-2 border-gray-200 text-gray-600'}`}
              >
                {step.id}
              </div>
              <div
                className={`text-[8px] sm:text-xs lg:text-sm mt-1 sm:mt-2 text-center w-full leading-tight ${currentStep >= step.id ? 'text-blue-900 font-medium' : 'text-gray-500'}`}
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

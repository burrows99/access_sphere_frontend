import React from 'react';

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="mt-8">
      <div className="flex justify-between relative mb-16">
        <div 
          className="absolute top-1/2 h-1 bg-blue-500 z-10 transition-all duration-300" 
          style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 z-0"></div>
        {steps.map((step) => (
          <div 
            key={step.id} 
            className="relative z-20 flex flex-col items-center w-10"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${currentStep >= step.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
              {step.id}
            </div>
            <div className="text-sm text-gray-500 mt-2 absolute top-full w-24 -ml-7 text-center">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;

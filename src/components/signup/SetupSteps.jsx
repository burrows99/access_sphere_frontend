import React from 'react';

const setupSteps = [
  {
    id: 1,
    title: 'Create Admin Account',
    description: 'Set up your initial administrator credentials and profile'
  },
  {
    id: 2,
    title: 'Configure Security',
    description: 'Enable Multi-Factor Authentication for enhanced protection'
  },
  {
    id: 3,
    title: 'Setup Team Access',
    description: 'Configure SSO or local authentication for your team'
  }
];

const SetupSteps = ({ className = '' }) => {
  return (
    <div className={`w-full bg-sphere-grey-light rounded-lg p-5 ${className}`}>
      <div className="font-semibold text-sphere-grey-dark mb-4">Setup Process Overview:</div>
      <div className="space-y-4">
        {setupSteps.map(step => (
          <div key={step.id} className="flex items-start">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 bg-sphere-blue-dark text-white mr-3`}>
              {step.id}
            </div>
            <div>
              <div className="font-semibold text-sphere-blue-dark">{step.title}</div>
              <div className="text-sphere-grey-dark text-sm">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetupSteps;

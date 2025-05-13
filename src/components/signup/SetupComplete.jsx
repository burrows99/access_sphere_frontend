import React from 'react';
import AccessSphereLogo from '../logos/AccessSphereLogo';

const SetupComplete = () => {
  const handleLaunchDashboard = () => {
    // Mock API call - in real app this would navigate to the dashboard
    console.log('Launching admin dashboard...');
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-gray-200">
        {/* Logo */}
        <AccessSphereLogo className="mb-4" />

        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title and subtitle */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Your AccessSphere Environment is Ready</h1>
        <p className="text-gray-500 text-center mb-8 max-w-md">
          You can now onboard customers, assign roles, and manage secure temporary access. Your secure cloud access management journey begins here.
        </p>

        {/* Launch Dashboard Button */}
        <button
          onClick={handleLaunchDashboard}
          className="px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-950 transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Launch Admin Dashboard
        </button>
      </div>
    </div>
  );
};

export default SetupComplete;

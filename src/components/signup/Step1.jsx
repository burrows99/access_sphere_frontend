import React from "react";

const Step1 = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-gray-200">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-gray-300 mb-6">
          <span className="text-3xl text-gray-400">?</span>
        </div>
        {/* Title and subtitle */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-2">Welcome to AccessSphere</h1>
        <p className="text-gray-500 text-center mb-6">
          Your instance has been successfully deployed and is ready to get started.
        </p>
        {/* AWS Marketplace Banner */}
        <div className="flex items-center w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 mb-6">
          <img src="https://a0.awsstatic.com/libra-css/images/logos/aws_smile-header-desktop-en-white_59x35.png" alt="AWS" className="w-8 h-8 mr-3" />
          <div>
            <div className="font-medium text-green-800 text-sm">AWS Marketplace Deployment Complete</div>
            <div className="text-green-700 text-xs">Your AccessSphere instance is ready for configuration</div>
          </div>
        </div>
        {/* Setup Process Overview */}
        <div className="w-full bg-gray-50 rounded-lg p-5 mb-8">
          <div className="font-semibold text-gray-700 mb-4">Setup Process Overview:</div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-base font-bold text-gray-700 mr-3">1</div>
              <div>
                <div className="font-semibold text-gray-900">Create Admin Account</div>
                <div className="text-gray-500 text-sm">Set up your initial administrator credentials and profile</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-base font-bold text-gray-700 mr-3">2</div>
              <div>
                <div className="font-semibold text-gray-900">Configure Security</div>
                <div className="text-gray-500 text-sm">Enable Multi-Factor Authentication for enhanced protection</div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-base font-bold text-gray-700 mr-3">3</div>
              <div>
                <div className="font-semibold text-gray-900">Setup Team Access</div>
                <div className="text-gray-500 text-sm">Configure SSO or local authentication for your team</div>
              </div>
            </div>
          </div>
        </div>
        {/* Begin Setup Button */}
        <button
          className="w-full bg-blue-900 hover:bg-blue-950 text-white font-semibold py-3 rounded-lg text-base flex items-center justify-center transition-colors duration-150"
          onClick={onNext}
        >
          Begin Setup
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default Step1;

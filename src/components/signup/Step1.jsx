import React from "react";
import NoProfilePictureLogo from '../logos/NoProfilePictureLogo';
import SetupSteps from './SetupSteps';

const Step1 = ({ onNext }) => {

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-sphere-grey-light">
        {/* Profile Picture */}
        <NoProfilePictureLogo className="mb-6" />
        {/* Title and subtitle */}
        <h1 className="text-2xl md:text-3xl font-bold text-sphere-blue-dark text-center mb-2">Welcome to AccessSphere</h1>
        <p className="text-sphere-grey-dark text-center mb-6">
          Your instance has been successfully deployed and is ready to get started.
        </p>
        {/* AWS Marketplace Banner */}
        <div className="flex items-center w-full bg-sphere-green-light border border-sphere-green-dark rounded-lg px-4 py-3 mb-6">
          <img src="/aws_green_logo.svg" alt="AWS" className="w-8 h-8 mr-3" />
          <div>
            <div className="font-medium text-sphere-blue-dark text-sm">AWS Marketplace Deployment Complete</div>
            <div className="text-sphere-blue-dark text-xs">Your AccessSphere instance is ready for configuration</div>
          </div>
        </div>
        {/* Setup Process Overview */}
        <SetupSteps className="mb-8" />
        {/* Begin Setup Button */}
        <button
          className="w-full bg-sphere-blue-dark hover:bg-sphere-blue-light active:bg-sphere-blue-light text-white font-semibold py-3 rounded-lg text-base flex items-center justify-center transition-colors duration-150"
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

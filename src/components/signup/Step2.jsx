import React, { useState } from 'react';
import AccessSphereLogo from '../logos/AccessSphereLogo';

const Step2 = ({ onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    console.log('Creating admin account with:', formData);
    onNext();
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-sphere-grey-light">
        {/* Logo */}
        <AccessSphereLogo className="mb-4" />

        {/* Title and subtitle */}
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold text-sphere-blue-dark mb-2">Create Your Admin Account</h1>
          <p className="text-sphere-grey-dark mb-8">This admin will manage AccessSphere settings</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700">Work Email</label>
            <input
              type="email"
              id="workEmail"
              name="workEmail"
              value={formData.workEmail}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="mt-2 space-y-1 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                <span>Minimum 8 characters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                <span>One uppercase letter</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                <span>One number</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-900"></div>
                <span>One special character</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex gap-4 w-full pt-4">
            <button
              type="button"
              onClick={onPrevious}
              className="flex-1 px-4 py-3 bg-sphere-grey-light text-sphere-grey-dark font-semibold rounded-lg hover:bg-sphere-grey-light transition-colors duration-150"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-sphere-blue-dark hover:bg-sphere-blue-light active:bg-sphere-blue-light text-white font-semibold py-3 rounded-lg text-base flex items-center justify-center transition-colors duration-150"
            >
              Continue
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step2;

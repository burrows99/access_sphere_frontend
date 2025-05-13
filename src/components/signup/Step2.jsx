import React, { useState } from 'react';

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
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-gray-200">
        {/* Logo */}
        <div className="mb-4">
          <img src="/logo.svg" alt="AccessSphere" className="h-8" />
        </div>

        {/* Title and subtitle */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Create Your Admin Account</h1>
        <p className="text-gray-500 text-center mb-8">This admin will manage AccessSphere settings</p>

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

          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onPrevious}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center"
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

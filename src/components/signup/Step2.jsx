import React, { useState } from 'react';
import AccessSphereLogo from '../logos/AccessSphereLogo';
import Input from '../common/Input';

const Step2 = ({ onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    // Here you would typically validate and submit the form data
    console.log('Form submitted:', formData);
    onNext();
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-8 flex flex-col items-center border border-sphere-grey-light">
        {/* Logo */}
        <AccessSphereLogo className="mb-4" />

        {/* Title and subtitle */}
        <h1 className="text-2xl font-bold text-sphere-blue-dark mb-2">Create Admin Account</h1>
        <p className="text-sphere-grey-dark text-center mb-8">Set up your administrator account to manage Access Sphere</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <Input
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <Input
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <Input
            label="Work Email"
            type="email"
            id="workEmail"
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            required
          />

          <div className="space-y-2">
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <div className="mt-2 space-y-1 text-sm text-sphere-grey-dark">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sphere-grey-dark"></div>
                <span>Minimum 8 characters</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sphere-grey-dark"></div>
                <span>One uppercase letter</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sphere-grey-dark"></div>
                <span>One number</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sphere-grey-dark"></div>
                <span>One special character</span>
              </div>
            </div>
          </div>

          <Input
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Navigation */}
          <div className="flex gap-4 w-full pt-8">
            <button
              type="button"
              onClick={onPrevious}
              className="flex-1 px-4 py-3 bg-sphere-grey-light text-sphere-grey-dark font-semibold rounded-lg hover:bg-sphere-grey-light transition-colors duration-150"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-sphere-blue-dark text-white font-semibold py-3 rounded-lg hover:bg-sphere-blue-light transition-colors duration-150 flex items-center justify-center"
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

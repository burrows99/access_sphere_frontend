import React, { useState } from 'react';

const Step5 = ({ onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    orgName: '',
    sessionTimeout: '30',
    complianceMode: true
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    console.log('Saving customization settings:', formData);
    onNext();
  };

  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];
    if (file) {
      console.log('Uploading logo:', file.name);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-gray-200">
        {/* Logo */}
        <div className="mb-4">
          <img src="/logo.svg" alt="AccessSphere" className="h-8" />
        </div>

        {/* Title and subtitle */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Customize Your Environment</h1>
        <p className="text-gray-500 text-center mb-8">Configure your organization's settings and preferences</p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          {/* Organization Name */}
          <div className="space-y-2">
            <label htmlFor="orgName" className="block text-sm font-medium text-gray-700">Organization Name</label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              placeholder="Enter organization name"
              value={formData.orgName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Organization Logo */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Organization Logo</label>
            <div
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleFileDrop}
            >
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                </svg>
                <div className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium">Upload a file</div>
                <p className="text-gray-500 text-sm mt-1">or drag and drop</p>
                <p className="text-gray-400 text-xs mt-1">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </div>

          {/* Session Timeout */}
          <div className="space-y-2">
            <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">Default Session Timeout</label>
            <select
              id="sessionTimeout"
              name="sessionTimeout"
              value={formData.sessionTimeout}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          {/* Compliance Mode */}
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="complianceMode" className="block text-sm font-medium text-gray-900">Compliance Mode</label>
              <p className="text-sm text-gray-500">Enforce justification and prevent self-assignment</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="complianceMode"
                checked={formData.complianceMode}
                onChange={handleChange}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          {/* Navigation */}
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
              className="px-6 py-2 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-950 transition-colors flex items-center"
            >
              Save & Finish Setup
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step5;

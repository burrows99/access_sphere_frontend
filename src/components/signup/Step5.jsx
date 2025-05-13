import React, { useState, useRef } from 'react';
import AccessSphereLogo from '../logos/AccessSphereLogo';

const Step5 = ({ onNext, onPrevious }) => {
  const [formData, setFormData] = useState({
    orgName: '',
    sessionTimeout: '30',
    complianceMode: false
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleFile = (file) => {
    setError('');
    
    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (PNG or JPG)');
      return;
    }
    
    // Validate file size (10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB');
      return;
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      onNext();
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-8 flex flex-col items-center border border-sphere-grey-light">
        {/* Logo */}
        <AccessSphereLogo className="mb-4" />

        {/* Title and subtitle */}
        <h1 className="text-2xl font-bold text-sphere-blue-dark mb-2">Customize Your Environment</h1>
        <p className="text-sphere-grey-dark text-center mb-8">Configure your organization's settings and preferences</p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          {/* Organization Name */}
          <div className="space-y-2">
            <label htmlFor="orgName" className="block text-sm font-medium text-sphere-grey-dark">Organization Name</label>
            <input
              type="text"
              id="orgName"
              name="orgName"
              placeholder="Enter organization name"
              value={formData.orgName}
              onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
              className="w-full px-3 py-2 border border-sphere-grey-light rounded-lg focus:outline-none focus:ring-2 focus:ring-sphere-grey-dark"
              required
            />
          </div>

          {/* Organization Logo */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-sphere-grey-dark">Organization Logo</label>
            <div 
              className="relative border-2 border-sphere-grey-light rounded-lg p-8"
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
            <input
              ref={inputRef}
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            
            <div className="flex flex-col items-center text-center">
              {previewUrl ? (
                <div className="mb-4">
                  <img src={previewUrl} alt="Preview" className="w-32 h-32 object-contain" />
                </div>
              ) : (
                <svg className="w-12 h-12 text-sphere-grey-dark mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                </svg>
              )}
              
              <p className="text-sphere-blue-dark font-medium mb-1">Upload a file</p>
              <p className="text-sphere-grey-dark text-sm mb-2">or drag and drop</p>
              <p className="text-sphere-grey-dark text-xs">PNG, JPG up to 10MB</p>
              
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
            </div>
          </div>

          {/* Session Timeout */}
          <div className="space-y-2">
            <label htmlFor="sessionTimeout" className="block text-sm font-medium text-sphere-grey-dark">Default Session Timeout</label>
            <select
              id="sessionTimeout"
              name="sessionTimeout"
              value={formData.sessionTimeout}
              onChange={(e) => setFormData({ ...formData, sessionTimeout: e.target.value })}
              className="w-full px-3 py-2 border border-sphere-grey-light rounded-lg focus:outline-none focus:ring-2 focus:ring-sphere-grey-dark bg-white"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
            </select>
          </div>

          {/* Compliance Mode */}
          <div className="flex items-center justify-between p-4 bg-sphere-grey-light rounded-lg">
            <div>
              <label htmlFor="complianceMode" className="block text-sm font-medium text-sphere-grey-dark">Compliance Mode</label>
              <p className="text-sm text-sphere-grey-dark">Enforce justification and prevent self-assignment</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="complianceMode"
                checked={formData.complianceMode}
                onChange={(e) => setFormData({ ...formData, complianceMode: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-sphere-grey-light peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-sphere-grey-dark rounded-full peer border-2 border-sphere-grey-dark peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-sphere-grey-dark after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sphere-blue-dark"></div>
            </label>
          </div>

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
              disabled={!selectedFile || !formData.orgName}
              className={`flex-1 font-semibold py-3 rounded-lg text-base flex items-center justify-center transition-colors duration-150 ${selectedFile ? 'bg-sphere-blue-dark hover:bg-sphere-blue-light active:bg-sphere-blue-light text-white' : 'bg-sphere-grey-light text-sphere-grey-dark cursor-not-allowed'}`}
            >
              Finish Setup
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step5;

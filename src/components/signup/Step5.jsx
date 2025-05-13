import React, { useState, useRef } from 'react';
import AccessSphereLogo from '../logos/AccessSphereLogo';
import Input from '../common/Input';
import Select from '../common/Select';
import Toggle from '../common/Toggle';
import FileInput from '../common/FileInput';

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
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile && formData.orgName) {
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
          <Input
            label="Organization Name"
            id="orgName"
            name="orgName"
            placeholder="Enter organization name"
            value={formData.orgName}
            onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
            required
          />

          {/* Organization Logo */}
          <FileInput
            label="Organization Logo"
            id="orgLogo"
            name="orgLogo"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handleChange}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            previewUrl={previewUrl}
            error={error}
            inputRef={inputRef}
          />

          {/* Session Timeout */}
          <Select
            label="Default Session Timeout"
            id="sessionTimeout"
            name="sessionTimeout"
            value={formData.sessionTimeout}
            onChange={(e) => setFormData({ ...formData, sessionTimeout: e.target.value })}
            options={[
              { value: '15', label: '15 minutes' },
              { value: '30', label: '30 minutes' },
              { value: '60', label: '1 hour' },
              { value: '120', label: '2 hours' }
            ]}
          />

          {/* Compliance Mode */}
          <Toggle
            label="Compliance Mode"
            id="complianceMode"
            checked={formData.complianceMode}
            onChange={(e) => setFormData({ ...formData, complianceMode: e.target.checked })}
            description="Enforce justification and prevent self-assignment"
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
              disabled={!selectedFile || !formData.orgName}
              className={`flex-1 font-semibold py-3 rounded-lg text-base flex items-center justify-center transition-colors duration-150 ${selectedFile && formData.orgName ? 'bg-sphere-blue-dark hover:bg-sphere-blue-light active:bg-sphere-blue-light text-white' : 'bg-sphere-grey-light text-sphere-grey-dark cursor-not-allowed'}`}
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

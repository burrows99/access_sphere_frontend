import React, { useState } from 'react';

const Step3 = ({ onNext, onPrevious }) => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [showManualCode, setShowManualCode] = useState(false);

  const handleDigitChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit
    const newCode = [...verificationCode];
    newCode[index] = value;
    setVerificationCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      document.getElementById(`digit-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    console.log('Verifying MFA code:', verificationCode.join(''));
    onNext();
  };

  const handleDownloadCodes = () => {
    console.log('Downloading backup codes...');
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-gray-200">
        {/* Logo */}
        <div className="mb-4">
          <img src="/logo.svg" alt="AccessSphere" className="h-8" />
        </div>

        {/* Title and subtitle */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Enable Multi-Factor Authentication</h1>
        <p className="text-gray-500 text-center mb-8">Secure your account with an additional layer of protection</p>

        {/* QR Code */}
        <div className="bg-gray-50 p-8 rounded-lg mb-6">
          <img 
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=" 
            alt="MFA QR Code"
            className="w-48 h-48"
          />
        </div>

        <p className="text-gray-600 mb-4">Scan with Google Authenticator or Authy</p>

        {/* Manual Code Toggle */}
        <button 
          onClick={() => setShowManualCode(!showManualCode)}
          className="text-blue-600 hover:text-blue-700 mb-6 flex items-center"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Manual Setup Code
        </button>

        {showManualCode && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 w-full max-w-md text-center">
            <code className="text-lg font-mono">ABCD-EFGH-IJKL-MNOP</code>
          </div>
        )}

        {/* Verification Code Input */}
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <label className="block text-sm font-medium text-gray-700 mb-3">Enter 6-digit Verification Code</label>
          <div className="flex gap-2 mb-6 justify-center">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                id={`digit-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleDigitChange(index, e.target.value)}
                className="w-12 h-12 text-center text-lg font-medium border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          {/* Backup Codes */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium text-gray-900">Backup Codes</h3>
                <p className="text-sm text-gray-500">Save these codes in case you lose access to your authenticator</p>
              </div>
              <button
                type="button"
                onClick={handleDownloadCodes}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Codes
              </button>
            </div>
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
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              Verify & Continue
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;

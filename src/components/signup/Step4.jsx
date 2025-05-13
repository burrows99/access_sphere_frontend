import React, { useState } from 'react';
import AccessSphereLogo from '../logos/AccessSphereLogo';
import Input from '../common/Input';

const Step4 = ({ onNext, onPrevious }) => {
  const [authType, setAuthType] = useState('sso');
  const [ssoProvider, setSsoProvider] = useState('azure');
  const [formData, setFormData] = useState({
    domain: '',
    metadataUrl: ''
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
    console.log('Saving authentication settings:', {
      type: authType,
      provider: ssoProvider,
      ...formData
    });
    onNext();
  };

  const handleTestConnection = () => {
    console.log('Testing SSO connection...');
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 flex flex-col items-center border border-sphere-grey-light">
        {/* Logo */}
        <AccessSphereLogo className="mb-4" />

        {/* Title and subtitle */}
        <h1 className="text-2xl font-bold text-sphere-blue-dark mb-2">How should your team sign in?</h1>
        <p className="text-sphere-grey-dark mb-8">Configure how users will authenticate with AccessSphere</p>

        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          {/* SSO Option */}
          <div className="border border-gray-200 rounded-lg p-4">
            <label className="flex items-start mb-4">
              <input
                type="radio"
                checked={authType === 'sso'}
                onChange={() => setAuthType('sso')}
                className="mt-1 h-4 w-4 text-blue-600"
              />
              <span className="ml-2">
                <span className="block font-medium text-gray-900">Single Sign-On (SSO)</span>
              </span>
            </label>

            {authType === 'sso' && (
              <div className="space-y-4">
                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setSsoProvider('azure')}
                    className={`flex items-center px-4 py-2 rounded-lg border ${ssoProvider === 'azure' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
                  >
                    <img src="/azure-ad-logo.svg" alt="Azure AD" className="w-6 h-6 mr-2" />
                    Azure AD
                  </button>
                  <button
                    type="button"
                    onClick={() => setSsoProvider('okta')}
                    className={`flex items-center px-4 py-2 rounded-lg border ${ssoProvider === 'okta' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
                  >
                    <img src="/okta-logo.svg" alt="Okta" className="w-6 h-6 mr-2" />
                    Okta
                  </button>
                  <button
                    type="button"
                    onClick={() => setSsoProvider('saml')}
                    className={`flex items-center px-4 py-2 rounded-lg border ${ssoProvider === 'saml' ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}
                  >
                    <img src="/saml-logo.svg" alt="SAML" className="w-6 h-6 mr-2" />
                    SAML
                  </button>
                </div>

                <div className="space-y-4">
                  <Input
                    label="Organization Domain"
                    type="text"
                    name="domain"
                    placeholder="company.com"
                    value={formData.domain}
                    onChange={handleChange}
                  />

                  <div className="space-y-2">
                    <Input
                      label="SAML Metadata"
                      type="text"
                      name="metadataUrl"
                      placeholder="Metadata URL"
                      value={formData.metadataUrl}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-sphere-grey-light text-sphere-grey-dark font-medium rounded-lg hover:bg-sphere-grey-light transition-colors"
                    >
                      Upload XML
                    </button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ACS URL</span>
                      <span className="text-gray-900">https://auth.accesssphere.com/saml/acs</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Entity ID</span>
                      <span className="text-gray-900">urn:accesssphere:saml</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleTestConnection}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Test Connection
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Local Authentication Option */}
          <div className="border border-gray-200 rounded-lg p-4">
            <label className="flex items-start">
              <input
                type="radio"
                checked={authType === 'local'}
                onChange={() => setAuthType('local')}
                className="mt-1 h-4 w-4 text-blue-600"
              />
              <span className="ml-2">
                <span className="block font-medium text-gray-900">Local Authentication</span>
                <span className="block text-sm text-gray-500">Users will log in using credentials managed directly in AccessSphere</span>
              </span>
            </label>
          </div>

          {/* Navigation */}
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

export default Step4;

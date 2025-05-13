import React from 'react';

const AccessSphereLogo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2 font-inter font-bold text-2xl leading-6 ${className}`}>
      <img src="/access_sphere_logo.svg" alt="AccessSphere" className="h-6" />
      <img src="/access_sphere_logo_text.svg" alt="AccessSphere" className="h-4" />
    </div>
  );
};

export default AccessSphereLogo;

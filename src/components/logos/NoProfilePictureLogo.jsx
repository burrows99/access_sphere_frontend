import React from 'react';

const NoProfilePictureLogo = ({ className = '' }) => {
  return (
    <div className={`w-[192px] h-[192px] bg-[#EFF6FF] rounded-full flex items-center justify-center ${className}`}>
      <img 
        src="/no_picture_placeholder_logo.svg" 
        alt="AccessSphere"
        className="w-[60px] h-[60px]"
      />
    </div>
  );
};

export default NoProfilePictureLogo;

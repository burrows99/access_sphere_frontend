import React from "react";

const ContentBox = ({ children }) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow p-4 h-[calc(100vh-140px)] flex flex-col items-center border border-gray-200">
        {children}
      </div>
    </div>
  );
};

export default ContentBox;

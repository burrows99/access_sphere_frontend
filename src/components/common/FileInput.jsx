import React from 'react';

const FileInput = ({
  label,
  id,
  name,
  accept,
  onChange,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDrop,
  previewUrl,
  error,
  inputRef,
  className = '',
  ...props
}) => {
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-sphere-grey-dark"
        >
          {label}
        </label>
      )}
      <div 
        className="relative border-2 border-sphere-grey-light rounded-lg p-8"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        <input
          ref={inputRef}
          type="file"
          id={id}
          name={name}
          accept={accept}
          onChange={onChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          {...props}
        />
        <div className="flex flex-col items-center justify-center">
          {previewUrl ? (
            <img
              src={previewUrl}
              alt="Preview"
              className="w-32 h-32 object-contain mb-4"
            />
          ) : (
            <>
              <svg
                className="w-12 h-12 text-sphere-grey-dark mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 48 48"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h22v22H13z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M28 21v-4h-8v4m4-4v12"
                />
              </svg>
              <p className="text-sphere-grey-dark text-center">
                Upload a file or drag and drop<br />
                PNG, JPG up to 10MB
              </p>
            </>
          )}
          {error && (
            <p className="text-red-500 text-sm mt-2">{error}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileInput;

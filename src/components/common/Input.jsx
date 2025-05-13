import React from 'react';

const Input = ({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  error,
  className = '',
  ...props
}) => {
  const baseInputStyles = `
    w-full 
    px-3 
    py-2 
    border-2
    border-sphere-grey-light 
    rounded-lg 
    focus:outline-none 
    focus:ring-2 
    focus:ring-sphere-grey-dark
    focus:border-transparent
    transition-colors
    duration-200
    disabled:bg-sphere-grey-light
    disabled:cursor-not-allowed
  `;

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
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseInputStyles} ${className}`}
        {...props}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;

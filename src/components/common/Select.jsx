import React from 'react';

const Select = ({
  label,
  id,
  value,
  onChange,
  options,
  required,
  error,
  className = '',
  ...props
}) => {
  const baseSelectStyles = `
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
    bg-white
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
      <select
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className={`${baseSelectStyles} ${className}`}
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Select;

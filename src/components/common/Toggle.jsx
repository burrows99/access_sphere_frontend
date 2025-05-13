import React from 'react';

const Toggle = ({
  label,
  id,
  checked,
  onChange,
  description,
  className = '',
  ...props
}) => {
  return (
    <div className={`flex items-center justify-between p-4 bg-sphere-grey-light rounded-lg ${className}`}>
      <div>
        <label 
          htmlFor={id} 
          className="block text-sm font-medium text-sphere-grey-dark"
        >
          {label}
        </label>
        {description && (
          <p className="text-sm text-sphere-grey-dark">
            {description}
          </p>
        )}
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
          {...props}
        />
        <div className="
          w-11 
          h-6 
          bg-sphere-grey-light 
          peer-focus:outline-none 
          peer-focus:ring-2 
          peer-focus:ring-sphere-grey-dark 
          rounded-full 
          peer 
          border-2 
          border-sphere-grey-dark 
          peer-checked:after:translate-x-full 
          peer-checked:after:border-white 
          after:content-[''] 
          after:absolute 
          after:top-[2px] 
          after:left-[2px] 
          after:bg-white 
          after:border-sphere-grey-dark 
          after:border 
          after:rounded-full 
          after:h-5 
          after:w-5 
          after:transition-all 
          peer-checked:bg-sphere-blue-dark
        "></div>
      </label>
    </div>
  );
};

export default Toggle;

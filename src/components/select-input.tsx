import { SelectInputProps } from '@/utils/interface';
import React from 'react';


const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  id,
  options,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className={`border border-gray-300 rounded-md px-3 py-1 text-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      >
       
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;

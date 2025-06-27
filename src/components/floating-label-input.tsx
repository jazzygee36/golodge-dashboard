import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export const FloatingLabelInput = ({
    id,
    label,
    type = "text",
    className = "",
    ...props
  }:{
    label: string;
  } & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    return (
      <div className="relative">
        <input
          type={type}
          id={id}
          placeholder=" "
          className={`peer w-full px-3 py-2 border border-gray-300 rounded-lg 
                   transition-all duration-200
                   focus:ring-2 focus:ring-primary focus:border-primary
                   hover:border-gray-400 outline-none ${className}`}
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute left-2 top-2 text-gray-500 transition-all duration-200
                     peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm 
                     peer-focus:text-primary peer-focus:bg-white peer-focus:px-2
                     peer-not-placeholder-shown:-top-2.5 
                     peer-not-placeholder-shown:left-2 
                     peer-not-placeholder-shown:text-sm
                     peer-not-placeholder-shown:bg-white 
                     peer-not-placeholder-shown:px-2
                     text-base"
        >
          {label}
        </label>
      </div>
    );
  };
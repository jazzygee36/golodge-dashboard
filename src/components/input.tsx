import { useState } from "react";
import type { InputProps } from "../utils/interface";
import CloseEye from "@/assets/svg/close-eye";
import EyeOpen from "@/assets/svg/eye-open";

const HomeInput = ({
  type,
  placeholder,
  label,
  onChange,
  value,
  name,
  border,
  onKeyPress,
  readOnly,
  className,
  height,
  borderRadius,
  boxShadow,
  ...props
}: InputProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div className="w-full">
      {label && (
        <h3 className="text-[#1E1E1E] text-[13px] font-roboto mb-2">{label}</h3>
      )}
      <div className="relative items-center">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          readOnly={readOnly}
          className={`${className}  w-full   ${border} rounded-md outline-none px-4 bg-[#F6F5F5] placeholder-[#98A9BC] placeholder:text-[14px] placeholder:font-normal`}
          {...props}
          style={{
            border: border,
            height: height,
            borderRadius: borderRadius,
            boxShadow: boxShadow,
          }}
        />
        {type === "password" && (
          <div
            className="absolute cursor-pointer top-3 right-2"
            onClick={handleTogglePassword}
          >
            {visible ? <EyeOpen /> : <CloseEye />}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeInput;

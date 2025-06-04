import type { InputProps } from "../utils/interface";


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
  return (
    <div className='w-full'>
      {label && <h3 className='text-[#1E1E1E] text-[13px] font-roboto mb-2'>{label}</h3>}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        readOnly={readOnly}
        className={`${className}  w-full   ${border} rounded-md outline-none px-4 bg-[#F6F5F5] placeholder-[#98A9BC] placeholder:text-[14px] placeholder:font-[400]`}
        {...props}
        style={{ border: border, height: height, borderRadius: borderRadius, boxShadow:boxShadow}}
      />
    </div>
  );
};

export default HomeInput;
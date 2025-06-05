import type { ButtonProps } from "../utils/interface";

const HomeButton = ({
  title,
  onClick,
  type,
  bg,
  width,
  color,
  disabled,
  height,
  borderRadius,
  border,
  className
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{ backgroundColor: bg, border:border, width: width, color: color, height:height, borderRadius:borderRadius}}
      className={` text-white   border-none  rounded-md cursor-pointer   text-[10px] md:text-[12px]  transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 ${className}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default HomeButton;
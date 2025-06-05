import { InputHTMLAttributes } from "react";

export interface dashboardProps {
  title: string;
  setIsOpen?: (val: boolean) => void;
  isOpen?: boolean;
  children: React.ReactNode;
}
export interface headerProps {
  title: string;
}
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  label?: string;
  name?: string;
  value?: string;
  border?: string;
  readOnly?: boolean;
  height: string;
  borderRadius?: string;
  boxShadow?: string;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  className?: string;
  bg: string;
  width: string;
  color?: string;
  height:string;
  borderRadius?:string;
  border?: string;
}
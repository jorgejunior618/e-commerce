import { InputHTMLAttributes } from "react";

function Input({
  type,
  onChange,
  value,
  placeholder,
  maxLength,
  minLength,
  id,
  className,
  disabled,
}: InputHTMLAttributes<HTMLInputElement>) {
  return(
    <input
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      id={id}
      className={className}
      disabled={disabled}
    />
  );
}
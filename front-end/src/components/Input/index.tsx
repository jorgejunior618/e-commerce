import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { StyledInput, StyledTextArea } from "./styles";

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
  name,
  required,
}: InputHTMLAttributes<HTMLInputElement>) {
  return(
    <StyledInput
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      id={id}
      className={className}
      disabled={disabled}
      name={name}
      required={required}
    />
  );
}

export function TextArea({
  onChange,
  value,
  placeholder,
  maxLength,
  minLength,
  id,
  className,
  disabled,
  name,
  required,
  rows,
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return(
    <StyledTextArea
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      minLength={minLength}
      id={id}
      className={className}
      disabled={disabled}
      name={name}
      required={required}
      rows={rows}
    />
  );
}

export default Input;


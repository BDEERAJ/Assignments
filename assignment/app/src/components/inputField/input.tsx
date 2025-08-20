
import React, { useState } from "react";
import './input.css';

interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'filled',
  size = 'md',
}) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  const inputType = isTextVisible ? 'text' : 'password';
  const sizeClass = size === 'sm' ? 'form-control-sm' : size === 'lg' ? 'form-control-lg' : '';

 const inputClasses = `
  form-control 
  ${variant} 
  ${sizeClass} 
  ${invalid ? 'is-invalid' : ''} 
  text-black 
  mx-2
`.trim();


  const inputId = label ? label : undefined;

  return (
    <div className="mb-3 w-50 m-auto">
      {label && (
        <label htmlFor={inputId} className="form-label mx-3 text-secondary">
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <input
          id={inputId}
          type={inputType}
          className={inputClasses}
          value={value}
  onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        <i
          className={`bi ${isTextVisible ? 'bi-eye-fill' : 'bi-eye-slash-fill'} password-icon mx-3`}
          onClick={toggleTextVisibility}
        />
      </div>
      {helperText && !invalid && (
        <div className="form-text mx-4 text-primary">
          {helperText}
        </div>
      )}
      {invalid && errorMessage && (
        <div className="error-message mx-4 text-danger fw-bold">
          ..{errorMessage}
        </div>
      )}
    </div>
  );
};

export default InputField;
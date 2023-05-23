import React from "react";
import { InputField, InputWrapper, Label } from "./Input.styled";

interface InputProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  type?: string; 
}
 const Input: React.FC<InputProps> = ({ label, name, value, placeholder, type }) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputField
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};

export default Input;

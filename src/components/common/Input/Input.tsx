import React from "react";
import { ErrorMessage, InputField, InputWrapper, Label } from "./Input.styled";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  type?: string; 
  icon?: IconDefinition;
  register: UseFormRegister<FieldValues>;
  error?: string ;
  rules: object;
  togglePasswordVisibility: ()=>void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  placeholder,
  type,
  icon,
  register,
  error,
  rules,
  togglePasswordVisibility, // Add the prop
}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputField
        type={type}
        value={value}
        placeholder={placeholder}
        {...register(name, rules)}
      />
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          onClick={togglePasswordVisibility} // Call the togglePasswordVisibility function on icon click
        />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

export default Input;
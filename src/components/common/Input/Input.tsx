import React   from "react";
import { InputField, InputWrapper, Label } from "./Input.styled";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputProps {
  label?: string;
  name: string;
  value?: string;
  placeholder?: string;
  type?: string; 
  icon?:IconDefinition;
}
 const Input: React.FC<InputProps> = ({ label, name, value, placeholder, type ,icon}) => {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <InputField
        type={type} 
        name={name}
        value={value}
        placeholder={placeholder}
      />
            {icon && <FontAwesomeIcon icon={icon} />}

    </InputWrapper>
  );
};

export default Input;

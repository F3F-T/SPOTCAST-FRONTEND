import React from "react";
import {
  InputProps,
  Container,
  LabelWrapper,
  InputWrapper,
} from "./index.styles";

function Input({
  value,
  type = "text",
  label,
  labelType = "default",
  placeholder,
  required = false,
  size = 35,
  color = "light",
  className,
  isValid = true,
  // className,
  onChange,
}: InputProps) {
  return (
    <Container
      // className={className}
      size={size}
      labelType={labelType}
      color={color}
      className={className}
      isValid={isValid}
    >
      <LabelWrapper>{label}</LabelWrapper>
      <InputWrapper
        value={value}
        type={type}
        name={label}
        placeholder={labelType === "hidden" ? label : placeholder}
        required={required}
        onChange={onChange}
      />
    </Container>
  );
}

export default Input;

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
  onChange
}: InputProps) {
  return (
    <Container size={size} labelType={labelType} color={color}>
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

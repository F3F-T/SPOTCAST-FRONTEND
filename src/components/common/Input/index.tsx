import React from "react";
import {
  InputProps,
  Container,
  LabelWrapper,
  InputWrapper,
  TextAreaWrapper,
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
  isTextarea = false,
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
      isTextarea={isTextarea!}
    >
      <LabelWrapper>{label}</LabelWrapper>
      {isTextarea ? (
        <TextAreaWrapper
          value={value}
          name={label}
          placeholder={labelType === "hidden" ? label : placeholder}
          required={required}
        />
      ) : (
        <InputWrapper
          value={value}
          type={type}
          name={label}
          placeholder={labelType === "hidden" ? label : placeholder}
          required={required}
          onChange={onChange}
        />
      )}
    </Container>
  );
}

export default Input;

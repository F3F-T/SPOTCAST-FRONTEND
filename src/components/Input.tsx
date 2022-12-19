import React from "react";
import styled from "@emotion/styled";
import { GREY, MUSTARD, WHITE, BLACK, INDIGO } from "../constants/colors";

type LabelType = "default" | "hidden";
type ColorScheme = "light" | "dark";

interface Input {
  value: string;
  type: string;
  label: string;
  labelType?: LabelType;
  placeholder?: string;
  required?: boolean;
  size?: number;
  color?: ColorScheme;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  value,
  type = "text",
  label,
  labelType = "default",
  placeholder,
  required = false,
  size = 35,
  color = "light",
  onChange,
}: Input) => {
  const Container = styled.div<{
    color: ColorScheme;
    labelType: LabelType;
    size: number;
  }>`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    ${() => `
      input, label {color: ${{ light: BLACK, dark: WHITE }[color]}}
      label {
        display: ${{ hidden: "none", default: "initial" }[labelType]};
      }
      input {
        border: ${
          {
            light: `0.15rem solid ${GREY[600]}`,
            dark: `0.15rem solid ${GREY[700]}`,
          }[color]
        };
            background-color: ${{ light: WHITE, dark: GREY[900] }[color]};
            width: ${size}ch
      }
      `}
  `;

  const LabelWrapper = styled.label`
    font-weight: bold;
    font-size: 1.7rem;
  `;

  const InputWrapper = styled.input`
    font-size: 1.7rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    outline-color: ${MUSTARD};
  `;

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
};

export default Input;

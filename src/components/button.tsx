"use client";

import React from "react";
import styled from "@emotion/styled";
import { INDIGO, MUSTARD, GREY, WHITE } from "../constants/colors";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonType = "primary" | "secondary" | "text";

export type ButtonProps = {
  size?: ButtonSize;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className: string;
  hasPadding?: boolean;
};

export default function Button({
  size = "medium",
  type = "text",
  title,
  onClick,
  disabled = false,
  className,
  hasPadding,
}: ButtonProps) {
  const HAS_PADDING = hasPadding || type !== "text";

  return (
    //   eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      size={size}
      buttonType={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      hasPadding={HAS_PADDING}
    >
      {title}
    </Wrapper>
  );
}

// export default React.memo(Button);
const Wrapper = styled.button<{
  size: ButtonSize;
  disabled: boolean;
  buttonType: ButtonType;
  hasPadding: boolean;
}>`
  ${({ size, disabled, buttonType, hasPadding }) => `
   padding:  ${
     // eslint-disable-next-line no-nested-ternary
     size === "large"
       ? "1.2rem 20rem"
       : size === "medium"
       ? "1rem 4rem"
       : "1rem 2rem"
   };
  font-size: ${{ large: "2rem", medium: "1,7rem", small: "1.2rem" }[size]};
  font-weight: ${{ primary: "600", secondary: "600", text: "400" }[buttonType]};
  cursor: ${disabled ? "default" : "pointer"};
  color: ${buttonType === "text" ? GREY[500] : WHITE};
  background-color: ${
    // eslint-disable-next-line no-nested-ternary
    buttonType === "text" ? WHITE : buttonType === "primary" ? INDIGO : MUSTARD
  };
  ${
    !disabled &&
    `&:hover {
      ${buttonType === "primary" ? "background-color" : null}: ${INDIGO}; 
      border-color: ${buttonType === "text" ? GREY[600] : null};
      color:  ${buttonType === "text" ? GREY[600] : null};
    }`
  }
  border: ${buttonType !== "text" ? "none" : `1px solid ${GREY[500]}`};
`}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 2rem;
`;

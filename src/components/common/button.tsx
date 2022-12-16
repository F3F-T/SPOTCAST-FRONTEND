"use client";

import React from "react";
import styled from "@emotion/styled";
import {
  INDIGO,
  INDIGO_DARK,
  MUSTARD,
  MUSTARD_DARK,
  GREY,
  WHITE,
} from "../../constants/colors";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonType = "primary" | "secondary" | "text";

export type ButtonProps = {
  size?: ButtonSize;
  type?: ButtonType;
  title: string;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export default function Button({
  size = "medium",
  type = "text",
  title,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    //   eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      size={size}
      buttonType={type}
      onClick={onClick}
      disabled={disabled}
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
}>`
  ${({ size, disabled, buttonType }) => `
   padding:  ${
     // eslint-disable-next-line no-nested-ternary
     size === "large"
       ? "1.2rem 20rem"
       : size === "medium"
       ? "1rem 4rem"
       : "1rem 2rem"
   };
  font-size: ${{ large: "2rem", medium: "1,7rem", small: "1.2rem" }[size]};
  cursor: ${disabled ? "default" : "pointer"};
  color: ${buttonType === "text" ? GREY[500] : WHITE};
  background-color: ${
    { primary: INDIGO, secondary: MUSTARD, text: WHITE }[buttonType]
  };
  ${
    !disabled &&
    `&:hover {
      background-color: ${
        { primary: INDIGO_DARK, secondary: MUSTARD_DARK, text: WHITE }[
          buttonType
        ]
      };
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

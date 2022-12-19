"use client";

import React from "react";
import styled from "@emotion/styled";
import {
  INDIGO,
  INDIGO_MUTED,
  MUSTARD,
  MUSTARD_MUTED,
  GREY,
  WHITE,
} from "../../constants/colors";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonTheme = "primary" | "secondary" | "tertiary";
export type ButtonProps = {
  size?: ButtonSize;
  theme?: ButtonTheme;
  title: string;
  width?: string;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  // iconOnly?: boolean;
};

export default function Button({
  size = "medium",
  theme = "primary",
  title,
  width,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    //   eslint-disable-next-line @typescript-eslint/no-use-before-define
    <Wrapper
      size={size}
      ButtonTheme={theme}
      onClick={onClick}
      disabled={disabled}
      width={width!}
    >
      {title}
    </Wrapper>
  );
}

// export default React.memo(Button);
const Wrapper = styled.button<{
  size: ButtonSize;
  width: string;
  disabled: boolean;
  ButtonTheme: ButtonTheme;
}>`
  ${({ size, disabled, ButtonTheme, width }) => `
   width: ${width};
   height: ${{ large: "3rem", medium: "2.5rem", small: "1.75rem" }[size]};
   font-size: ${{ large: "1.2rem", medium: "1rem", small: "0.75rem" }[size]};
   padding: ${
     { large: "0 1.5rem", medium: "0 1rem", small: "0 0.875rem" }[size]
   };
  cursor: ${disabled ? "default" : "pointer"};
  color: ${ButtonTheme === "tertiary" ? GREY[500] : WHITE};
  background-color: ${
    { primary: INDIGO, secondary: MUSTARD, tertiary: WHITE }[ButtonTheme]
  };
  ${
    !disabled &&
    `&:hover {
      background-color: ${
        { primary: INDIGO_MUTED, secondary: MUSTARD_MUTED, tertiary: WHITE }[
          ButtonTheme
        ]
      };
      border-color: ${ButtonTheme === "tertiary" ? GREY[600] : null};
      color:  ${ButtonTheme === "tertiary" ? GREY[600] : null};
    }`
  }
  border: ${ButtonTheme !== "tertiary" ? "none" : `1px solid ${GREY[500]}`};
`}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 2rem;
`;

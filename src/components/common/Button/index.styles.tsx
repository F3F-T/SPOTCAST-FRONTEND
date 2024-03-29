import styled from "@emotion/styled";
import {
  INDIGO,
  INDIGO_MUTED,
  MUSTARD,
  MUSTARD_MUTED,
  GREY,
  WHITE,
} from "../../../constants/colors";

export type ButtonSize = "large" | "medium" | "small";
export type ButtonTheme = "primary" | "secondary" | "tertiary";
export type ButtonProps = {
  className?: string;
  size?: ButtonSize;
  buttonTheme?: ButtonTheme;
  title?: string;
  width?: string;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  // iconOnly?: boolean;
};

const Wrapper = styled.button<{
  className?: string;
  size: ButtonSize;
  width: string;
  disabled: boolean;
  ButtonTheme: ButtonTheme;
}>`
  ${({ size, disabled, ButtonTheme, width }) => `
     width: ${width};
     font-size: ${{ large: "1.2rem", medium: "1rem", small: "0.75rem" }[size]};
     padding: ${
       { large: "0 1.5rem", medium: "0 1rem", small: "0 0.875rem" }[size]
     };
    cursor: ${disabled ? "default" : "pointer"};
    border: ${ButtonTheme !== "tertiary" ? "none" : `1px solid ${GREY[500]}`};
      color: ${
        (disabled && GREY[400]) ||
        (ButtonTheme === "tertiary" ? GREY[500] : WHITE)
      };
      background-color: 
      ${
        (disabled && GREY[200]) ||
        { primary: INDIGO, secondary: MUSTARD, tertiary: WHITE }[ButtonTheme]
      };
    ${
      !disabled &&
      `
      &:hover {
        background-color: ${
          { primary: INDIGO_MUTED, secondary: MUSTARD_MUTED, tertiary: WHITE }[
            ButtonTheme
          ]
        };
        color:  ${ButtonTheme === "tertiary" ? GREY[600] : null};
      }`
    }

  `}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 2rem;
`;

export { Wrapper };

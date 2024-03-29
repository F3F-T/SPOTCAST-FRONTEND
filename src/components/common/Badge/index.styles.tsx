import styled from "@emotion/styled";
import { GREY, MUSTARD, INDIGO, WHITE, BLACK } from "../../../constants/colors";

export type BadgeVariant = "mustard" | "indigo" | "grey";
export type BadgeSize = "large" | "medium" | "small";

export interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const Wrapper = styled.span<{
  variant: BadgeVariant;
  size: BadgeSize;
  className?: string;
}>`
  ${({ variant, size }) => `
  color : ${variant === "indigo" || "mustard" ? WHITE : BLACK};
  background-color: ${
    {
      mustard: MUSTARD,
      indigo: INDIGO,
      grey: GREY[600],
    }[variant]
  };
  font-size: ${{ large: "2rem", medium: "1.5rem", small: "1rem" }[size]};
  `}
  display: block;
  font-weight: 500;
  padding: 0.5em 1em;
  width: fit-content;
  border-radius: 0.3em;
`;

export { Wrapper };

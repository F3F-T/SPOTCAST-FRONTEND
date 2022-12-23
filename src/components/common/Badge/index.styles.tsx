import styled from "@emotion/styled";
import { GREY, MUSTARD, INDIGO } from "../../../constants/colors";

export type BadgeVariant = "mustard" | "indigo" | "grey";
export type BadgeSize = "large" | "medium" | "small";

export interface BadgeProps {
  children: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const Wrapper = styled.span<{
  variant: BadgeVariant;
  size: BadgeSize;
}>`
  ${({ variant, size }) => `
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
  font-weight: bold;
  padding: 0.5em 1em;
  width: fit-content;
  border-radius: 0.3em;
`;

export { Wrapper };

import React from "react";
import styled from "@emotion/styled";
import { GREY, MUSTARD, WHITE, BLACK, INDIGO } from "../../constants/colors";

type BadgeVariant = "mustard" | "indigo" | "grey";
type BadgeSize = "large" | "medium" | "small";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
}

const Badge = ({
  label,
  variant = "indigo",
  size = "medium",
}: BadgeProps) => {
  const Wrapper = styled.span<{
    variant: BadgeVariant;
    size: BadgeSize;
  }>`
    background-color: ${{
      mustard: MUSTARD,
      indigo: INDIGO,
      grey: GREY[600]
    }[variant]};
    display: block;
    font-size: ${{ large: "2rem", medium: "1.5rem", small: "1rem" }[size]};
    font-weight: bold;
    padding: 0.5em 1em;
    width: fit-content;
    border-radius: 0.3em;
  `;

  return (
    <Wrapper variant={variant} size={size}>
      {label}
    </Wrapper>
  );
};

export default Badge;

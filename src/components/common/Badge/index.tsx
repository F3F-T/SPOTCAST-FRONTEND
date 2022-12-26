import React from "react";
import { BadgeProps, Wrapper } from "./index.styles";

function Badge({
  className,
  label,
  variant = "indigo",
  size = "medium",
}: BadgeProps) {
  return (
    <Wrapper variant={variant} size={size} className={className}>
      {label}
    </Wrapper>
  );
}

export default Badge;

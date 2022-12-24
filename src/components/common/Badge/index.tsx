import React from "react";
import { BadgeProps, Wrapper } from "./index.styles";

function Badge({
  children,
  variant = "indigo",
  size = "medium",
  className,
}: BadgeProps) {
  return (
    <Wrapper className={className} variant={variant} size={size}>
      {children}
    </Wrapper>
  );
}

export default Badge;

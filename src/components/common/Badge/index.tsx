import React from "react";
import { BadgeProps, Wrapper } from "./index.styles";

function Badge({ children, variant = "indigo", size = "medium" }: BadgeProps) {
  return (
    <Wrapper variant={variant} size={size}>
      {children}
    </Wrapper>
  );
}

export default Badge;

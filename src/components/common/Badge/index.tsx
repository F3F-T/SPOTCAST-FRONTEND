import React from "react";
import { BadgeProps, Wrapper } from "./index.styles";

function Badge({ label, variant = "indigo", size = "medium" }: BadgeProps) {
  return (
    <Wrapper variant={variant} size={size}>
      {label}
    </Wrapper>
  );
}

export default Badge;

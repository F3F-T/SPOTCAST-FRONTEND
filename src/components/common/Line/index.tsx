import React from "react";
import { LineProps, StyledLine } from "./index.styles";

export default function Line({ color, width, className }: LineProps) {
  return <StyledLine className={className} color={color} width={width} />;
}

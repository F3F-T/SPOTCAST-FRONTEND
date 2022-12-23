import React from "react";
import { LineProps, StyledLine } from "./index.styles";

export default function Line({ color, width }: LineProps) {
  return <StyledLine color={color} width={width} />;
}

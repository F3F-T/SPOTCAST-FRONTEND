import React from "react";
import styled from "@emotion/styled";

export type LineProps = {
  // 선 색상
  color: string;
  //   선 너비
  width: string;
};
export default function Line({ color, width }: LineProps) {
  return <StyledLine color={color} width={width} />;
}

export const StyledLine = styled.div`
  ${({ color, width }) => `
    border-bottom: 0.1rem solid ${color};
    width: ${width};
`}
  margin: 0 auto;
`;

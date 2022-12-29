import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from "@emotion/styled";
import Icons from "../../constants/icons";

interface IconProps {
  className: string;
  size?: string;
  color?: string;
  border?: number;
}

const StyledIcon = styled.i<{ border: number }>`
  ${({ border }) => `
   -webkit-text-stroke: ${border}px;
`}
`;

function Icon({ className, size = "", color, border = 1.2 }: IconProps) {
  return (
    <StyledIcon
      className={Icons[className]}
      style={{ fontSize: size, color }}
      border={border}
    />
  );
}

export default Icon;

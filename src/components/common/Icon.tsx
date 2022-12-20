import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styled from "@emotion/styled";
import icons from "../../constants/icons"

interface iconProps {
  className: string; 
  size?: string;
  color?: string;
}

const Icon = ({ className, size = "" , color }: iconProps) => {
  const Wrapper = styled.i<{
    size: string;
  }>`
    font-size: ${size};
    color: ${color};
  `;
  return <Wrapper className={icons[className.toString()]} size={size}></Wrapper>;
};

export default Icon;

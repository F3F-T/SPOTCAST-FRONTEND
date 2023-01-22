import styled from "@emotion/styled";
import React from "react";
import Icon from "../Icon";

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  z-index: 70;
`;

export interface IconButtonProps {
  IconName: string;
  color?: string;
  size?: string;
  border?: number;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export default function IconButton({
  IconName,
  color,
  size,
  border,
  onClick,
}: IconButtonProps) {
  return (
    <Button onClick={onClick}>
      <Icon className={IconName} size={size} color={color} border={border} />
    </Button>
  );
}

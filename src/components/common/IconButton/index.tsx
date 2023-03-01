import styled from "@emotion/styled";
import React from "react";
import Icon from "../Icon";

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 300rem;
  z-index: 70;
`;

export interface IconButtonProps {
  className?: string;
  IconName: string;
  color?: string;
  size?: string;
  border?: number;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export default function IconButton({
  className,
  IconName,
  color,
  size,
  border,
  onClick,
}: IconButtonProps) {
  return (
    <Button className={className} onClick={onClick}>
      <Icon className={IconName} size={size} color={color} border={border} />
    </Button>
  );
}

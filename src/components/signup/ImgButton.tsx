import React from "react";
import styled from "@emotion/styled";

export type SignupButtonProps = {
  href?: string;
  ImgSrc?: string;
  size?: number;
  title?: string;
  className?: string;
  color?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Wrapper = styled.a`
  ${({ color }) => `
background-color: ${color};`}
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const Logo = styled.img<{ size: number }>`
  ${({ size }) => `
  width: ${size}rem;
  height: ${size}rem;
  margin-right: 1rem;
`}
`;
const NoneImg = styled.div<{ size: number }>`
  ${({ size }) => `
  width: ${size}rem;
  height: ${size}rem;
`}
`;
const StyledP = styled.p`
  font-weight: 700;
`;

export default function LoginButton({
  href,
  ImgSrc,
  title,
  className,
  color,
  size = 3,
  onClick,
}: SignupButtonProps) {
  return (
    <Wrapper className={className} href={href} color={color} onClick={onClick}>
      {ImgSrc === "none" ? (
        <NoneImg size={size} />
      ) : (
        <Logo src={ImgSrc} alt={title} size={size} />
      )}
      <StyledP>{title}</StyledP>
    </Wrapper>
  );
}

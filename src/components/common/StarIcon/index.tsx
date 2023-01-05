import React, { useState } from "react";
import styled from "@emotion/styled";
import Icon from "../Icon";
import Ripple from "./Ripple";
import { MUSTARD, MUSTARD_MUTED } from "../../../constants/colors";

const StarButton = styled.button`
  width: 2.2rem;
  height: 2.2rem;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  -moz-osx-font-smoothing: auto;
  border: none;
  outline: none;
  transform-origin: 50%;
  position: relative;

  &:hover {
    transform: scale(1.2);
  }
`;
interface StarProps {
  border: number;
  size: string;
}
export default function StarIcon({ border, size }: StarProps) {
  const [isStarred, setIsStarred] = useState(false);

  const handleStarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsStarred(!isStarred);
    // 즐겨찾기 POST
  };
  return (
    <StarButton type="button" onClick={handleStarClick}>
      <Ripple color={MUSTARD_MUTED} duration={1000} />
      <Icon
        className={isStarred ? "starFill" : "starEmpty"}
        color={MUSTARD}
        border={border}
        size={size}
      />
    </StarButton>
  );
}

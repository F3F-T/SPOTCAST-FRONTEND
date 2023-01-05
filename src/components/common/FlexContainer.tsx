import styled from "@emotion/styled";
import React from "react";

type DirectionType = "row" | "column";
type PositionType = "flex-start" | "center" | "flex-end";

interface FlexProps {
  children: React.ReactNode;
  direction: DirectionType;
  gap: string;
  align?: PositionType;
  justify?: PositionType;
  width?: string;
}

function FlexContainer({
  children,
  direction,
  gap,
  align = "flex-start",
  justify = "flex-start",
  width = "100%",
}: FlexProps) {
  const Wrapper = styled.div<{
    children: React.ReactNode;
    direction: DirectionType;
    gap: string;
    align?: PositionType;
    justify?: PositionType;
    width?: string;
  }>`
    display: flex;
    ${() => `
        flex-direction: ${direction};
        gap: ${gap};
        width: ${width};
        align-items: ${align};
        justify-content: ${justify}
    `}
  `;
  return (
    <Wrapper
      direction={direction}
      gap={gap}
      align={align}
      justify={justify}
      width={width}
    >
      {children}
    </Wrapper>
  );
}

export default FlexContainer;

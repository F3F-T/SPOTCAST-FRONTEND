import React, { useState, useLayoutEffect } from "react";
import styled from "@emotion/styled";

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

interface PropsType {
  duration: number;
  color: string;
}

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

export const RippleContainer = styled.div<{ duration: number; color: string }>`
  ${({ color, duration }) => `
  span {
    background-color: ${color};
    animation-duration: ${duration}ms;
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    animation-name: ripple;
  }

`}
  position: absolute;
  width: 100%;
  height: 100%;

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: any,
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

function Ripple(props: PropsType) {
  const { duration, color } = props;
  const [rippleArray, setRippleArray] = useState<RippleProps[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
      {rippleArray.length > 0 &&
        rippleArray.map((ripple: RippleProps) => {
          return (
            <span
              key={`span${rippleArray.indexOf(ripple)}`}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </RippleContainer>
  );
}

export default Ripple;

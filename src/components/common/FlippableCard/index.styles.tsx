import styled from "@emotion/styled";

const CardContainer = styled.div`
  width: 7rem;
  height: 10rem;
  border: 2px solid cyan;
  position: relative;
  transform-style: preserve-3d;
  cursor: pointer;
  /*     transform: perspective(1000px) rotateY(var(--rotate-y, 0)); */
  rotate: y var(--rotate-y, 0);
  transition: all 1000ms;
  &.flipped {
    background-color: blue;
    --rotate-y: 180deg;
  }
`;

const CardFrontContainer = styled.div`
  border: 1px solid red;
  position: absolute;
  backface-visibility: hidden;
`;

const CardBackContainer = styled.div`
  border: 1px solid blue;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export { CardContainer, CardFrontContainer, CardBackContainer };

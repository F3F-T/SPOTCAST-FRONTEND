/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import {
  Title,
  SliderWrapper,
  ButtonWrapper,
  LeftButton,
  RightButton,
  StyledSlider,
  SliderContent,
} from "./index.styles";
import TopCard from "./TopCard";
import { SubCarousel } from "../../../hooks/useCarousel";

export default function Carousel() {
  const {
    handleSwipe,
    slides,
    currentIndex,
    slideTransition,
    newItemWidth,
    items,
    getItemIndex,
  } = SubCarousel();
  return (
    <>
      <Title>
        뜨고 있는 프로필 ⚡
        <ButtonWrapper>
          <LeftButton onClick={() => handleSwipe(-3)}>{"<"}</LeftButton>
          <RightButton onClick={() => handleSwipe(3)}>{">"}</RightButton>
        </ButtonWrapper>
      </Title>
      <SliderWrapper>
        <StyledSlider
          style={{
            transform: `translateX(calc(${
              (-100 / slides.length) * (0.5 + currentIndex)
            }% `,
          }}
          transition={slideTransition}
        >
          {slides.map((slide, slideIndex) => {
            const itemIndex = getItemIndex(slideIndex);
            return (
              <SliderContent style={{ width: newItemWidth }}>
                {/* <TopCard color={items[itemIndex]} /> */}
                <TopCard item={items[itemIndex]} />
              </SliderContent>
            );
          })}
        </StyledSlider>
      </SliderWrapper>
    </>
  );
}

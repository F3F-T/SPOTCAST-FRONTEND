/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import {
  Title,
  SliderWrapper,
  LeftButton,
  RightButton,
  StyledSlider,
  SliderContent,
  SliderFakerImage,
} from "./index.styles";
import { MainCarousel } from "../../../hooks/useCarousel";
import Icon from "../../common/Icon";

export default function Carousel() {
  const {
    handleSwipe,
    slides,
    currentIndex,
    slideTransition,
    newItemWidth,
    items,
    getItemIndex,
  } = MainCarousel();
  return (
    <>
      <Title> 얼마 안남은 오디션/캐스팅 🗓️</Title>
      <SliderWrapper>
        <LeftButton onClick={() => handleSwipe(-1)}>
          <Icon className="arrowLeft" border={1.3} size="1.8rem" />
        </LeftButton>
        <RightButton onClick={() => handleSwipe(1)}>
          <Icon className="arrowRight" border={1.3} size="1.8rem" />
        </RightButton>
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
                <SliderFakerImage color={items[itemIndex]} />
                {/* <img src={items[itemIndex]} alt={`banner${itemIndex}`} /> */}
              </SliderContent>
            );
          })}
        </StyledSlider>
      </SliderWrapper>
    </>
  );
}

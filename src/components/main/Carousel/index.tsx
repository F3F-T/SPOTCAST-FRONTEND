/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from "react";
import {
  Title,
  SliderWrapper,
  LeftButton,
  RightButton,
  StyledSlider,
  SliderContent,
  SliderFakerImage,
} from "./index.styles";
import { GREY } from "../../../constants/colors";

export default function Carousel() {
  // 이미지 경로
  // const items = [
  //   "/images/image1.jpg",
  //   "/images/image2.jpg",
  //   "/images/image3.jpg",
  // ];

  const items = [GREY[300], GREY[400], GREY[500]];
  const itemSize = items.length;

  const newItemWidth = 1060;
  const transitionStyle = `transform 500ms ease 0s`;
  const [slideTransition, setTransition] = useState(transitionStyle);
  const SIZE_BOTH_ENDS = 2;
  const [currentIndex, setCurrentIndex] = useState(SIZE_BOTH_ENDS);

  const slides = setSlides();
  function setSlides() {
    const addedFront = [];
    const addedLast = [];
    let index = 0;
    while (index < SIZE_BOTH_ENDS) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index += 1;
    }
    return [...addedFront, ...items, ...addedLast];
  }

  // 끝나면 처음index로 돌리는 함수
  function replaceSlide(index: number) {
    const newIdx = index;
    setTimeout(() => {
      setTransition("");
      setCurrentIndex(newIdx);
    }, 500);
  }

  function handleSlide(index: number) {
    let newIndex = index;
    setCurrentIndex(newIndex);
    if (newIndex - SIZE_BOTH_ENDS < 0) {
      newIndex += itemSize;
      replaceSlide(newIndex);
    } else if (newIndex - SIZE_BOTH_ENDS >= itemSize) {
      newIndex -= itemSize;
      replaceSlide(newIndex);
    }
    setTransition(transitionStyle);
  }

  function handleSwipe(direction: number) {
    handleSlide(currentIndex + direction);
  }
  function getItemIndex(index: number) {
    let newIndex = index;
    newIndex -= SIZE_BOTH_ENDS;
    if (newIndex < 0) {
      newIndex += itemSize;
    } else if (newIndex >= itemSize) {
      newIndex -= itemSize;
    }
    return newIndex;
  }

  return (
    <>
      <Title> 얼마 안남은 오디션/캐스팅 🗓️</Title>
      <SliderWrapper>
        <LeftButton onClick={() => handleSwipe(-1)}>{"<"}</LeftButton>
        <RightButton onClick={() => handleSwipe(1)}>{">"}</RightButton>
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

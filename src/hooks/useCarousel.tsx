import { useState } from "react";
import list from "../components/portfolio/TopPortfolio/data";

export function MainCarousel() {}

export function SubCarousel() {
  const items = list;
  const itemSize = items.length;

  const newItemWidth = 360;
  const transitionStyle = `transform 500ms ease 0s`;
  const [slideTransition, setTransition] = useState(transitionStyle);
  const SIZE_BOTH_ENDS = 2;
  const [currentIndex, setCurrentIndex] = useState(SIZE_BOTH_ENDS);
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
  const slides = setSlides();

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

  return {
    handleSwipe,
    slides,
    currentIndex,
    slideTransition,
    newItemWidth,
    items,
    getItemIndex,
  };
}

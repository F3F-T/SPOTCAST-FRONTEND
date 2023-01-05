import styled from "@emotion/styled";

const Title = styled.div`
  width: 100%;
  font-size: 1.7rem;
  font-weight: 700;
  text-align: start;
  margin-top: 3rem;
  margin-bottom: 2rem;
  padding-top: 5rem;
  position: relative;
`;
const DirectionButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;
  height: 26rem;
  margin-bottom: 3rem;
`;

const StyledSlider = styled.div<{ transition: string }>`
  ${({ transition }) => `
transition:  ${transition};
`}
  position: relative;
  left: 50%;
  top: 0;
  display: flex;
  flex-direction: row;
  text-align: left;
  width: fit-content;
`;

const SliderContent = styled.div`
  /* display: inline-block; */
  position: relative;
  height: 100%;
  padding-right: 2.3rem;
  float: left;
`;

const SliderFakerImage = styled.div`
  ${({ color }) => `
  background-color: ${color};

`}
  width: 5rem;
  height: 3rem;
  border-radius: 4px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
  /* max-height: 30rem; */
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  margin-right: 1rem;
`;

export {
  Title,
  SliderWrapper,
  ButtonWrapper,
  DirectionButton,
  StyledSlider,
  SliderContent,
  SliderFakerImage,
};

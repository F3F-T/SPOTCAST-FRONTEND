import styled from "@emotion/styled";
import { GREY } from "../../../constants/colors";

const Title = styled.div`
  width: 100%;
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  display: flex;
  position: relative;
  width: 100%;
  height: 30rem;
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
  padding: 0 12px;
  float: left;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    object-fit: cover;
    max-height: 300px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const SliderFakerImage = styled.div`
  ${({ color }) => `
  background-color: ${color};

`}
  width: 100%;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  &:hover {
    cursor: pointer;
  }
  /* max-height: 30rem; */
`;
const LeftButton = styled.button`
  position: absolute;
  top: 40%;
  left: 10%;
  padding: 20px 4px;
  z-index: 1;
  background-color: white;
  width: 3rem;
  height: 60px;
  opacity: 0.3;
  border-radius: 15px;
  border: none;
  font-size: 2rem;
  color: ${GREY[800]};
  &:hover {
    cursor: pointer;
  }
`;

const RightButton = styled.button`
  position: absolute;
  top: 40%;
  right: 10%;
  padding: 20px 4px;
  z-index: 1;
  background-color: white;
  width: 3rem;
  height: 60px;
  opacity: 0.3;
  border-radius: 15px;
  border: none;
  font-size: 2rem;
  color: ${GREY[800]};
  &:hover {
    cursor: pointer;
  }
`;

export {
  Title,
  SliderWrapper,
  LeftButton,
  RightButton,
  StyledSlider,
  SliderContent,
  SliderFakerImage,
};

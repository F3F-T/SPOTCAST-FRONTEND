import styled from "@emotion/styled";
import { GREY, BLACK } from "../../../constants/colors";

export const CardContainer = styled.div`
  max-width: 25.1rem;
  position: relative;
`;

export const BookmartButton = styled.button`
  border: none;
  outline: none;
  padding: 0;
  font-size: 1.8rem;
  position: absolute;
  top: 0.9rem;
  right: 1.2rem;
  background-color: transparent;
  cursor: pointer;
`;

export const ImageContainer = styled.div`
  border-radius: 0.57rem;
  overflow: hidden;
  aspect-ratio: 5/4;
  margin-bottom: 2rem;
  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Title = styled.a`
  display: block;
  font-size: 1.9rem;
  margin-bottom: 0.6rem;
`;

export const Subtitle = styled.a`
  display: block;
  font-size: 1.6rem;
  color: ${GREY[500]};
  margin-bottom: 0.4rem;
`;

export const EndDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Date = styled.div`
  font-size: 1.8rem;
  color: ${GREY[800]};
`;

export const Remainder = styled.div`
  border: 0.1rem solid ${BLACK};
  border-radius: 0.8rem;
  font-size: 1.88rem;
  padding: 0.6rem 1.3rem;
`;

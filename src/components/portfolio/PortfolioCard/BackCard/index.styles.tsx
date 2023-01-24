import styled from "@emotion/styled";
import { GREY } from "../../../../constants/colors";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 0.5rem;
  width: inherit;
  height: inherit;
  padding: 2.3rem;
`;
export const StarContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: end;
  gap: 0.4rem;
`;
export const StarButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;
export const StarCount = styled.span`
  font-size: 1.2rem;
`;
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 1.37rem;
`;
export const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem; /* COME BACK */
`;
export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;
export const Tag = styled.span`
  font-weight: 300;
  color: ${GREY[600]};
  font-size: 1.1rem;
`;
export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: auto;
`;
export const Link = styled.a`
  padding: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  position: relative;
  ::before {
    display: block;
    position: absolute;
    transform: translateX(-50%);
    bottom: 0;
    left: 50%;
    content: "";
    width: 100%;
    height: 0.2rem;
    background-color: ${GREY[300]};
    opacity: 0;
    transition: 200ms;
  }
  :hover::before {
    opacity: 1;
  }
`;

export const PrevGrid = styled.div<{ length: number }>`
  display: grid;
  height: 73%;
  gap: 1.2rem;
  ${({ length }) => `
    grid-template-columns: ${length > 2 ? "repeat(2,1fr)" : "1fr"};
    grid-template-rows: ${length > 1 ? "repeat(2,1fr)" : "auto"};
    ${
      length === 3 &&
      `  & > div:nth-of-type(3) {
    grid-column: span 2;
  }`
    }
  `}
`;
export const PrevImageContainer = styled.div`
  border-radius: 0.3rem;
  overflow: hidden;
  & > img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

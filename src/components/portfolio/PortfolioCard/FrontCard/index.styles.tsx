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
  padding: 2.2rem;
`;
export const StarContainer = styled.div`
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
export const ProfileImage = styled.img`
  width: 17.6rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
`;
export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 1.8rem 0;
`;
export const Subtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.7rem;
  margin-bottom: 1.9rem;
`;
export const Tag = styled.span`
  border: 1px solid ${GREY[500]};
  border-radius: 5.95rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.4rem;
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

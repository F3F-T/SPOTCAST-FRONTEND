import styled from "@emotion/styled";
import { BLACK, GREY, WHITE } from "../../constants/colors";
import Button from "../common/Button";

export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const CategoryButton = styled(Button)<{ className: string }>`
  margin-top: 5rem;
  font-size: 1.7rem;
  min-width: 13.5rem;
  padding: 0.9rem 3rem;
  border-radius: 2.85rem;
  ${({ className }) => `
      color: ${className === "active" ? BLACK : GREY[600]};
      border: 0.13rem solid ${className === "active" ? BLACK : GREY[600]};
      &:hover {
        color: ${BLACK};
        border-color: ${BLACK}
      }
    `}
`;

export const SubCategory = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const CategoryTitle = styled.h3`
  font-size: 2.617rem;
  font-weight: bold;
`;

export const DropDownButton = styled.button`
  cursor: pointer;
  margin-left: 0.9rem;
  aspect-ratio: 1/1;
  background-color: transparent;
  display: block;
  border-radius: 50%;
  border: 0.12rem solid ${BLACK};
  &:hover .drop-down-list {
    opacity: 1;
    pointer-events: auto;
  }
`;

export const DropDownList = styled.ul`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  top: calc(100% + 2.2rem);
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: ${WHITE};
  padding: 2.4rem 2.6rem;
  border-radius: 0.6rem;
  border: 0.05rem solid ${GREY[300]};
  box-shadow: 0 0.57rem 0.818rem 0.409rem rgba(0, 0, 0, 0.07);
`;

export const SubCategoryButton = styled.button`
  background-color: transparent;
`;

export const CardGrid = styled.div`
  margin-top: 2.6rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7rem 2.4rem;
`;

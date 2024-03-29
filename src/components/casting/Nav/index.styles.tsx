import styled from "@emotion/styled";
import { BLACK, GREY, WHITE } from "../../../constants/colors";
import Button from "../../common/Button";

export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid ${GREY[300]};
`;
export const CategoryButton = styled(Button)<{ className: string }>`
  font-size: 1.6rem;
  min-width: 6rem;
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
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const CategoryTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  gap: 1rem;
`;
export const SortButton = styled.button`
  background-color: white;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  width: 11rem;
  border: 0.1rem solid ${GREY[500]};
  padding: 1rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

export const WriteButton = styled.button`
  font-size: 1.4rem;
  width: 11rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[500]};
  padding: 1rem;
  color: white;
  background-color: ${GREY[700]};
  margin-left: 0.3rem;
  cursor: pointer;
`;

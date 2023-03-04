import styled from "@emotion/styled";
import { BLACK, GREY } from "../../constants/colors";
import Button from "../common/Button";

export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
export const CategoryButton = styled(Button)<{ className: string }>`
  font-size: 1.7rem;
  min-width: 13.5rem;
  padding: 0.9rem 3rem;
  border-radius: 2.85rem;
  ${({ className }) => `
      color: ${className === "active" ? BLACK : GREY[600]};
      border: 0.15rem solid ${className === "active" ? BLACK : GREY[600]};
      &:hover {
        color: ${BLACK};
        border-color: ${BLACK}
      }
    `}
`;

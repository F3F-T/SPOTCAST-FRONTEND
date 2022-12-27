import styled from "@emotion/styled";
import Button from "../../../common/Button";
import InnerContainer from "../../../common/InnerContainer";
import { BLACK, RED } from "../../../../constants/colors";

export const ArticleContainer = styled(InnerContainer)`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  gap: 2.6rem;
  margin: auto;
`;
export const ArticleTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
`;
export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2.3rem;
`;
export const CategoryButton = styled(Button)<{ className: string }>`
  font-size: 2.1rem;
  border: 1px solid ${BLACK};
  padding: 1.1rem;
  min-width: 15rem;
  border-radius: 2.85rem;
  ${({ className }) => `
      color: ${className === "active" ? BLACK : RED}
    `}
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem;
`;

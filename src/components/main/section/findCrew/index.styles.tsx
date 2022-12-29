import styled from "@emotion/styled";
import Button from "../../../common/Button";
import InnerContainer from "../../../common/InnerContainer";
import { BLACK, GREY } from "../../../../constants/colors";
import LabeledAnchor from "../../../common/LabeledAnchor";

export const ArticleContainer = styled(InnerContainer)`
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  gap: 2rem;
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
export const Anchor = styled(LabeledAnchor)`
  font-size: 1.8rem;
  font-weight: 700;
`;
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
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.5rem;
`;

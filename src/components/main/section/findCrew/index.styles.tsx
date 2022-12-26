import styled from "@emotion/styled";
import Button from "../../../common/Button";

export const ArticleContainer = styled.article`
  padding-top: 5rem;
  width: 108rem;
  display: flex;
  flex-direction: column;
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
`;
export const CategoryButton = styled(Button)`
  font-size: 2rem;
  color: red;
`;
export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 3rem;
`;

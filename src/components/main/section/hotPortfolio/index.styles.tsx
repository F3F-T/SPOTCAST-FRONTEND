import styled from "@emotion/styled";
import { GREY } from "../../../../constants/colors";

const Title = styled.div`
  width: 100%;
  font-size: 1.7rem;
  font-weight: 700;
  text-align: start;
  margin-bottom: 2rem;
`;
const Container = styled.div`
  width: 100%;
  /* height: 70rem; */
  display: flex;
  justify-content: center;
  margin-top: 8rem;
`;

const ArticleWrapper = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const CategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 18%;
  & :last-child {
    width: 8%;
    font-size: 2rem;
  }
  padding-bottom: 2.5rem;
`;

const CardWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 30%;
  padding-bottom: 1rem;
`;

const Category = styled.button`
  background-color: ${GREY[700]};
  width: 17%;
  height: 9rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  border: none;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  margin-top: 5rem;
  width: 100%;
  height: 6rem;
  border: none;
  background-color: ${GREY[800]};
  border-radius: 6rem;
  color: white;
  font-weight: 700;
  font-size: 1.7rem;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export {
  Container,
  ArticleWrapper,
  Title,
  Category,
  CategoryWrapper,
  CardWrapper,
  StyledButton,
};

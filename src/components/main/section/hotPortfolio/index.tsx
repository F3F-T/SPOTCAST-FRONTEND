/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import PortfolioCard from "./portfolio-card";
import users from "./fakeUser";
import {
  Container,
  ArticleWrapper,
  Title,
  Category,
  CategoryWrapper,
  CardWrapper,
  StyledButton,
} from "./index.styles";

export default function MainArticle1() {
  const CategoryList = ["전체보기", "음악", "연기", "연출", "모델", "+"];
  return (
    <Container>
      <ArticleWrapper>
        <Title>HOT 포트폴리오 📸</Title>
        <CategoryWrapper>
          {CategoryList.map(item => {
            return <Category>{item}</Category>;
          })}
        </CategoryWrapper>
        <CardWrapper>
          {users.map(user => {
            return <PortfolioCard user={user} />;
          })}
        </CardWrapper>
        <StyledButton>{`더 많은 영감 받으러 가기 >`}</StyledButton>
      </ArticleWrapper>
    </Container>
  );
}

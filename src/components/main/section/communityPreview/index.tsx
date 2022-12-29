/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import PreviewCard from "./preview-card";
import posts from "./fakeData";
import {
  Container,
  ArticleWrapper,
  Title,
  SubTitle,
  Anchor,
  CardContainer,
  Preview,
  PreviewTitle,
} from "./index.styles";

export default function MainArticle3() {
  const weeklyData = posts.filter(i => posts.indexOf(i) < 4);
  const newData = posts.filter(i => posts.indexOf(i) > 3);

  return (
    <Container>
      <ArticleWrapper>
        <Title>커뮤니티</Title>
        <SubTitle>다양한 아티스트들을 인터넷으로 만나보세요.</SubTitle>
        <Anchor href="/" label="전체보기" icon="arrowRight" border={1.2} />
        <CardContainer>
          <Preview>
            <PreviewTitle>Weekly Best</PreviewTitle>
            {weeklyData.map(post => {
              return <PreviewCard key={post.id} post={post} />;
            })}
          </Preview>
          <Preview>
            <PreviewTitle>New!</PreviewTitle>
            {newData.map(post => {
              return <PreviewCard key={post.id} post={post} />;
            })}
          </Preview>
        </CardContainer>
      </ArticleWrapper>
    </Container>
  );
}

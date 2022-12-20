import React from "react";
import styled from "@emotion/styled";
import LabeledAnchor from "../../../common/LabeledAnchor/LabeledAnchor";
import { ArticleContainer } from "./index.styles";
import { CardContainer } from "../Community-Preview/index.styles";

function MainArticle2() {
  const ArticleTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `;
  const ArticleContent = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const CategoryContainer = styled.ul`
    
  `

  return (
    <ArticleContainer>
      <ArticleTitle>
        <h2>함께 작업할 사람을 찾아보세요!</h2>
        <LabeledAnchor href="/findCrew" label="전체보기" icon="arrowRight" />
      </ArticleTitle>
      <ArticleContent>
        <CategoryContainer>

        </CategoryContainer>
        <CardContainer>

        </CardContainer>
      </ArticleContent>
    </ArticleContainer>
  );
}

export default MainArticle2;

import React, { useState } from "react";
import { posts, CrewPost } from "./fakePosts";
import LabeledAnchor from "../../../common/LabeledAnchor";
import CrewCard from "./CrewCard";
import {
  ArticleContainer,
  ArticleTitle,
  CardContainer,
  CategoryList,
  Title,
  CategoryButton,
} from "./index.styles";

interface CrewCategories {
  [translation: string]: string;
}

const categories: CrewCategories = {
  전체보기: "all",
  실용음악: "contemporaryMusic",
  클래식: "classic",
  연기: "theatre",
  연출: "production",
  모델: "modeling",
  기타: "others",
};

function MainArticle2() {
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <ArticleContainer>
      <ArticleTitle>
        <Title>함께 작업할 사람을 찾아보세요!</Title>
        <LabeledAnchor href="/" label="전체보기" icon="arrowRight" />
      </ArticleTitle>
      <CategoryList>
        {Object.keys(categories).map(category => (
          <li key={category}>
            <CategoryButton
              buttonTheme="tertiary"
              title={category}
              onClick={() => setCurrentCategory(categories[category])}
              className={
                categories[category] === currentCategory ? "active" : ""
              }
            />
          </li>
        ))}
      </CategoryList>
      <CardContainer>
        {posts[currentCategory] &&
          posts[currentCategory].map((post: CrewPost) => (
            <CrewCard {...post} />
          ))}
      </CardContainer>
    </ArticleContainer>
  );
}

export default MainArticle2;

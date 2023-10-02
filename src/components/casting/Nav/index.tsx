import React, { useState } from "react";
import {
  ButtonWrapper,
  CategoryButton,
  CategoryList,
  CategoryTitle,
  SortButton,
  SubCategory,
  WriteButton,
} from "./index.styles";
import Icon from "../../common/Icon";
import useCasting from "../../../hooks/useCasting";
import { CATEGORY_ID } from "../../../constants/boardType";

interface CastingCategories {
  [translation: string]: number;
}

export default function CastingNav() {
  const categories: CastingCategories = {
    전체보기: 0,
    ...CATEGORY_ID,
  };
  const {
    category: currentPageCategory,
    replaceFormPage,
    onChangeCategory,
  } = useCasting();

  const [currentCategory, setCurrentCategory] = useState(
    currentPageCategory ? +currentPageCategory : 0,
  );

  return (
    <>
      <CategoryList>
        {Object.keys(categories).map(category => (
          <li key={category}>
            <CategoryButton
              buttonTheme="tertiary"
              title={category}
              onClick={() => {
                setCurrentCategory(categories[category]);
                onChangeCategory(categories[category]);
              }}
              className={
                categories[category] === currentCategory ? "active" : ""
              }
            />
          </li>
        ))}
      </CategoryList>
      <SubCategory className="drop-down">
        <CategoryTitle>
          {Object.keys(categories).find(
            key => categories[key] === currentCategory,
          )}
        </CategoryTitle>

        <ButtonWrapper>
          <SortButton>
            <Icon className="sort" border={0.1} size="1.8rem" />
            최신순
          </SortButton>
          <WriteButton
            onClick={() => {
              replaceFormPage();
            }}
          >
            작성하기⚡
          </WriteButton>
        </ButtonWrapper>
      </SubCategory>
    </>
  );
}

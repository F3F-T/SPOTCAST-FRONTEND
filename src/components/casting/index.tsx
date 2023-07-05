import React, { useState } from "react";
import Icon from "../common/Icon";
import CastingCard from "./CastingCard";
import {
  CardGrid,
  CategoryButton,
  CategoryList,
  CategoryTitle,
  DropDownButton,
  DropDownList,
  SubCategory,
  SubCategoryButton,
  SortButton,
  WriteButton,
  ButtonWrapper,
} from "./index.styles";
import useCasting from "../../hooks/useCasting";

interface CastingCategories {
  [translation: string]: string;
}

const categories: CastingCategories = {
  전체보기: "all",
  실용음악: "contemporaryMusic",
  클래식: "classic",
  연기: "theatre",
  연출: "production",
  모델: "modeling",
  기타: "others",
};
const subCategories: CastingCategories = {
  아이돌: "idol",
  보컬: "vocal",
  연주: "instrument",
  프로듀싱: "producing",
};
export default function Casting() {
  const [currentCategory, setCurrentCategory] = useState(
    Object.values(categories)[0],
  );
  const [currentSubCategory, setCurrentSubCateogory] = useState(
    Object.values(subCategories)[0],
  );
  const { replaceFormPage } = useCasting();

  return (
    <>
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
      <SubCategory className="drop-down">
        <CategoryTitle>
          {Object.keys(categories).find(
            key => categories[key] === currentCategory,
          )}
        </CategoryTitle>
        <DropDownButton
          className="drop-down-button"
          onClick={() =>
            document.querySelector(".drop-down")?.classList.toggle("active")
          }
        >
          <Icon className="arrowDown" />
        </DropDownButton>
        <DropDownList>
          {Object.keys(subCategories).map(sub => (
            <li key={sub}>
              <SubCategoryButton
                onClick={() => setCurrentSubCateogory(subCategories[sub])}
                className={
                  subCategories[sub] === currentSubCategory ? "active" : ""
                }
              >
                {sub}
              </SubCategoryButton>
            </li>
          ))}
        </DropDownList>
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
      <CardGrid>
        <CastingCard />
        <CastingCard />
        <CastingCard />
        <CastingCard />
      </CardGrid>
    </>
  );
}

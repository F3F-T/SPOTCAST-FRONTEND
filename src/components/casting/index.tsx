import React, { useState } from "react";
import CastingCard from "./CastingCard";
import { CategoryButton, CategoryList } from "./index.styles";

export default function Casting() {
  const [currentCategory, setCurrentCategory] = useState("all");
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
      <h3>
        {Object.keys(categories).find(
          key => categories[key] === currentCategory,
        )}
      </h3>
      <CastingCard />
    </>
  );
}

import React, { useState } from "react";
import FlexContainer from "../../../common/FlexContainer";
import CrewCard from "./CrewCard";

interface CrewPost {
  id: number;
  category: string;
  profitable: boolean;
  content: string;
  duration: number;
  bookmarked: boolean;
  views: number;
  bookmarks: number;
}

interface CrewDashboard {
  [index: string]: any;
}



function CrewStack({ data }: CrewDashboard) {
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <>
      <ul>
        <FlexContainer direction="row" gap="2.3rem">
          {Object.keys(categories).map((category, i) => (
            <button
              key={i}
              onClick={() => {
                setCurrentCategory(categories[category]);
              }}
            >
              {category}
            </button>
          ))}
        </FlexContainer>
      </ul>
      <FlexContainer direction="row" gap="3rem">
        {data[currentCategory] &&
          data[currentCategory].map((post: CrewPost) => {
            return <CrewCard key={post.id} {...post} />;
          })}
      </FlexContainer>
    </>
  );
}

export default CrewStack;

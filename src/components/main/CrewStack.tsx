import React, { useState } from "react";
import FlexContainer from "../common/FlexContainer";
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

const CrewStack = ({ data }: CrewDashboard) => {
  const [currentCategory, setCurrentCategory] = useState("all");

  return (
    <>
      <ul>
        <FlexContainer direction={"row"} gap={"2.3rem"}>
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
      <FlexContainer
        direction="row"
        gap="3rem"
      >
        {data[currentCategory] &&
          data[currentCategory].map((post: CrewPost) => {
            return <CrewCard key={post.id} {...post} />;
          })}
      </FlexContainer>
    </>
  );
};

export default CrewStack;

/* const crewDashboard: [key: string] : any = {
    classic: CrewPost[]  = [
      {
        id: 1,
        category: "string",
        content: "string",
        views: 1,
        bookmarks: 1,
        bookmarked: false,
        duration: 1,
        badge: "string",
      },
      {
        id: 1,
        category: "string",
        content: "string",
        views: 1,
        bookmarks: 1,
        bookmarked: false,
        duration: 1,
        badge: "string",
      },
    ],
  }; */

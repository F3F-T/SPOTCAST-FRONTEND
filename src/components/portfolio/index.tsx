import React, { useState } from "react";
import Input from "../common/Input";
import SelectBox from "../common/SelectBox";
import PortfolioGrid from "./PortfolioGrid";
import TopPortfolio from "./TopPortfolio";
import { FilterSection, TagSelectBox, SearchInput } from "./index.styles";

const data = [
  {
    title: "윤채현",
    tags: ["연출", "실용음악"],
    imageUrl: "https://via.placeholder.com/300?text=CHAE",
    prevUrls: [
      "https://via.placeholder.com/300x100?text=1",
      "https://via.placeholder.com/200x400?text=2",
      "https://via.placeholder.com/300x700?text=3",
      "https://via.placeholder.com/300?text=4",
    ],
    profileUrl: "/profile",
    portfolioUrl: "/portfolio",
    isStarred: true,
    starred: 123,
  },
  {
    title: "김태희",
    tags: ["연기", "실용음악"],
    imageUrl: "https://via.placeholder.com/300?text=TH",
    prevUrls: [
      "https://via.placeholder.com/300x100?text=1",
      "https://via.placeholder.com/200x400?text=2",
      "https://via.placeholder.com/300x700?text=3",
      "https://via.placeholder.com/300?text=4",
    ],
    profileUrl: "/profile",
    portfolioUrl: "/portfolio",
    isStarred: true,
    starred: 142,
  },
  {
    title: "임동혁",
    tags: ["모델", "연기"],
    imageUrl: "https://via.placeholder.com/300?text=DH",
    prevUrls: [
      "https://via.placeholder.com/300x100?text=1",
      "https://via.placeholder.com/200x400?text=2",
      "https://via.placeholder.com/300x700?text=3",
      "https://via.placeholder.com/300?text=4",
    ],
    profileUrl: "/profile",
    portfolioUrl: "/portfolio",
    isStarred: false,
    starred: 34,
  },
  {
    title: "류동재",
    tags: ["연출", "실용음악"],
    imageUrl: "https://via.placeholder.com/300?text=DJ",
    prevUrls: [
      "https://via.placeholder.com/300x100?text=1",
      "https://via.placeholder.com/200x400?text=2",
      "https://via.placeholder.com/300x700?text=3",
      "https://via.placeholder.com/300?text=4",
    ],
    profileUrl: "/profile",
    portfolioUrl: "/portfolio",
    isStarred: false,
    starred: 0,
  },
];

export default function Portfolio() {
  const [selectedTag, setSelectedTag] = useState("전체보기");
  const [searchTerm, setSearchTerm] = useState("");
  const tagOptions = [
    { value: "전체보기", label: "전체보기" },
    { value: "실용음악", label: "실용음악" },
    { value: "연기", label: "연기" },
    { value: "모델", label: "모델" },
    { value: "연출", label: "연출" },
  ];

  return (
    <>
      <TopPortfolio />

      <FilterSection>
        <SearchInput
          placeholder="당신의 뮤즈를 찾아보세요!"
          value={searchTerm}
          type="text"
          label="포트폴리오 검색창"
          onChange={e => setSearchTerm(e.target.value)}
        />
        <TagSelectBox
          options={tagOptions}
          onChange={tag => {
            setSelectedTag(tag);
          }}
        />
      </FilterSection>

      <PortfolioGrid
        porfolios={data
          .filter(p => {
            if (selectedTag === "전체보기") {
              return p;
            }
            return p.tags.indexOf(selectedTag) > -1;
          })
          .filter(p => {
            if (searchTerm === "") {
              return p;
            }
            return p.title.includes(searchTerm);
          })}
      />
    </>
  );
}

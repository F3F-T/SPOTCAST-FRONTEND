/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "@emotion/styled";
import React, { useState } from "react";
import { BLACK, GREY } from "../../../constants/colors";
import Button from "../../common/Button";
import Icon from "../../common/Icon";
import Line from "../../common/Line";
import useRecruit from "../../../hooks/useRecruit";

export default function Menu() {
  const menu = ["전체", "진행중", "진행 마감"];
  const categories = [
    "실용 음악",
    "클래식",
    "영화",
    "드라마",
    "연극",
    "방송/예능",
    "모델",
    "광고",
    "기타",
  ];
  const [currentCategory, setCurrentCategory] = useState("실용 음악");
  const [currentMenu, setCurrentMenu] = useState("진행중");
  const { replaceFormPage } = useRecruit();
  return (
    <Container>
      <div>
        <Title>구인 공고</Title>
        {menu.map(ele => {
          return (
            <Progress
              onClick={() => setCurrentMenu(ele)}
              selected={currentMenu === ele}
            >
              {ele}
            </Progress>
          );
        })}
      </div>
      <CategoryList>
        {categories.map(category => (
          <li key={category}>
            <CategoryButton
              buttonTheme="tertiary"
              title={category}
              onClick={() => setCurrentCategory(category)}
              selected={category === currentCategory ? "active" : ""}
            />
          </li>
        ))}
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
      </CategoryList>

      <Line width="100%" color={GREY[400]} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  button {
    cursor: pointer;
  }
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;
const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const Title = styled.button`
  background-color: white;
  font-weight: 700;
  font-size: 2.2rem;
  border: none;
  border-right: 0.1rem solid black;
  width: 11rem;
  text-align: start;
  margin-right: 1.7rem;
`;

const Progress = styled.button<{ selected: boolean }>`
  background-color: white;
  font-weight: 700;
  font-size: 2.2rem;
  border: none;
  ${({ selected }) => `
    color: ${selected ? BLACK : GREY[600]} 
  
  `}
`;

const CategoryButton = styled(Button)<{ selected: string }>`
  font-size: 1.5rem;
  padding: 1rem 2.3rem;
  border-radius: 2.85rem;
  ${({ selected }) => `
      color: ${selected === "active" ? BLACK : GREY[600]};
      border: 0.15rem solid ${selected === "active" ? BLACK : GREY[600]};
      &:hover {
        color: ${BLACK};
        border-color: ${BLACK}
      }
    `}
`;

const SortButton = styled.button`
  background-color: white;
  font-size: 1.4rem;
  border-radius: 0.5rem;
  width: 11rem;
  border: 0.1rem solid ${GREY[500]};
  padding: 1rem;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WriteButton = styled.button`
  font-size: 1.4rem;
  width: 11rem;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[500]};
  padding: 1rem;
  color: white;
  background-color: ${GREY[700]};
  margin-left: 0.3rem;
`;

/* eslint-disable @typescript-eslint/no-use-before-define */
import styled from "@emotion/styled";
import React, { useState } from "react";
import { BLACK, GREY } from "../../../constants/colors";
import Button from "../../common/Button";
import Icon from "../../common/Icon";
import Line from "../../common/Line";
import useRecruit from "../../../hooks/useRecruit";
import { CATEGORY_ID, REG_STATUS } from "../../../constants/boardType";

export default function RecruitNav() {
  const regStatusMenu = [
    { label: "전체", value: REG_STATUS.ALL },
    { label: "진행중", value: REG_STATUS.ONGOING },
    { label: "진행 마감", value: REG_STATUS.END },
  ];

  const {
    replaceFormPage,
    onChangeRegStatus,
    regStatus,
    category: currentPageCategory,
    onChangeCategory,
  } = useRecruit();

  const [currentCategory, setCurrentCategory] = useState(
    currentPageCategory ? +currentPageCategory : 3,
  );
  const [currentMenu, setCurrentMenu] = useState(() => {
    const matchingMenu = regStatusMenu.find(ele => ele.value === regStatus);
    return matchingMenu ? matchingMenu.label : "전체";
  });

  return (
    <Container>
      <div>
        <Title>구인 공고</Title>
        {regStatusMenu.map(ele => {
          return (
            <Progress
              onClick={() => {
                setCurrentMenu(ele.label);
                onChangeRegStatus(ele.value);
              }}
              selected={currentMenu === ele.label}
            >
              {ele.label}
            </Progress>
          );
        })}
      </div>
      <CategoryList>
        {Object.keys(CATEGORY_ID).map(category => (
          <li key={category}>
            <CategoryButton
              buttonTheme="tertiary"
              title={category}
              onClick={() => {
                setCurrentCategory(CATEGORY_ID[category]);
                onChangeCategory(CATEGORY_ID[category]);
              }}
              selected={
                CATEGORY_ID[category] === currentCategory ? "active" : ""
              }
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

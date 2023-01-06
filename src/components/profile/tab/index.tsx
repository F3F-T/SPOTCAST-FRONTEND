import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
import Line from "../../common/Line";
import Introduce from "./introduce";
import Work from "./work";
import SNS from "./sns";
import Button from "../../common/Button";
import { GREY } from "../../../constants/colors";

const Container = styled.div`
  width: 58.5rem;
  height: 70rem;
  padding-top: 8.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  .current {
    font-weight: 700;
  }
  position: relative;
  align-items: center;
`;

const TabButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  padding: 1rem 2rem;
  &:hover {
    background-color: ${GREY[100]};
    border-radius: 5rem;
  }
`;

const StyledLine = styled(Line)`
  margin-bottom: 4rem;
`;

const EditButton = styled(Button)`
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  padding: 0.7rem 1.4rem;
`;

interface TabTypes {
  name: string;
  content: React.ReactNode;
}

interface TabProps extends Array<TabTypes> {}

export default function Tab() {
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenu: TabProps = [
    { name: "소개", content: <Introduce /> },
    { name: "작업물", content: <Work /> },
    { name: "SNS", content: <SNS /> },
  ];
  const tabHandler = useCallback(
    (index: number) => {
      setCurrentTab(index);
    },
    [tabMenu[currentTab].name],
  );
  return (
    <Container>
      <ButtonWrapper>
        {tabMenu.map((item, index) => {
          return (
            <TabButton
              className={index === currentTab ? "current" : ""}
              onClick={() => tabHandler(index)}
            >
              {item.name}
            </TabButton>
          );
        })}
        <EditButton title="수정하기" buttonTheme="tertiary" />
      </ButtonWrapper>
      <StyledLine width="100%" />
      <div>{tabMenu[currentTab].content}</div>
    </Container>
  );
}

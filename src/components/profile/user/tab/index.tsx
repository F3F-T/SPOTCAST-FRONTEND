import React, { useState, useCallback } from "react";
import styled from "@emotion/styled";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../../stores/reducers";
import Line from "../../../common/Line";
import Introduce from "./information";
import Work from "./work";
import SNS from "./sns";
import { GREY } from "../../../../constants/colors";

const Container = styled.div`
  width: 75rem;
  height: 70rem;
`;

const Wrapper = styled.div`
  padding-top: 7.5rem;
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

interface TabTypes {
  name: string;
  content: React.ReactNode;
}

interface TabProps extends Array<TabTypes> {}

export default function Tab() {
  //   const { IsUserLoggedIn } = useSelector((state: RootState) => state.user);
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenu: TabProps = [
    {
      name: "소개",
      content: <Introduce />,
    },
    {
      name: "작업물",
      content: <Work />,
    },
    {
      name: "SNS",
      content: <SNS />,
    },
  ];

  const tabHandler = useCallback(
    (index: number) => {
      setCurrentTab(index);
    },
    [tabMenu[currentTab].name],
  );

  return (
    <Container>
      <Wrapper>
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
        </ButtonWrapper>
        <StyledLine width="100%" />
        <div>{tabMenu[currentTab].content}</div>
      </Wrapper>
    </Container>
  );
}

import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
import styled from "@emotion/styled";
// import { useSelector } from "react-redux";
// import { RootState } from "../../../../stores/reducers";
import Line from "../../../common/Line";
import Introduce from "./Information/inform";
import Work from "./work";
import SNS from "./sns/inform";
import Button from "../../../common/Button";
import InformEditForm from "./Information/edit-form";
import SNSEditForm from "./sns/edit-form";
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

const EditButton = styled(Button)`
  font-size: 1.5rem;
  position: absolute;
  right: 0;
  padding: 0.7rem 1.4rem;
`;

interface TabTypes {
  name: string;
  content: React.ReactNode;
  editForm: React.ReactNode;
}

interface TabProps extends Array<TabTypes> {}

export interface FormProps {
  openForm: boolean;
  setOpenForm: Dispatch<SetStateAction<boolean>>;
}

export default function Tab({ openForm, setOpenForm }: FormProps) {
  //   const { IsUserLoggedIn } = useSelector((state: RootState) => state.user);
  const [currentTab, setCurrentTab] = useState(0);
  const tabMenu: TabProps = [
    {
      name: "소개",
      content: <Introduce />,
      editForm: <InformEditForm />,
    },
    {
      name: "작업물",
      content: <Work />,
      editForm: <InformEditForm />,
    },
    {
      name: "SNS",
      content: <SNS />,
      editForm: <SNSEditForm />,
    },
  ];

  const tabHandler = useCallback(
    (index: number) => {
      setCurrentTab(index);
    },
    [tabMenu[currentTab].name],
  );
  const onClickEditButton = useCallback(() => {
    setOpenForm(true);
  }, [currentTab]);
  return (
    <Container>
      {openForm ? (
        <div>{tabMenu[currentTab].editForm}</div>
      ) : (
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
            <EditButton
              onClick={onClickEditButton}
              title="수정하기"
              buttonTheme="tertiary"
            />
          </ButtonWrapper>
          <StyledLine width="100%" />
          <div>{tabMenu[currentTab].content}</div>
        </Wrapper>
      )}
    </Container>
  );
}

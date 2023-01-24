import React from "react";
import styled from "@emotion/styled";
import { GREY, INDIGO_DARK } from "../../constants/colors";
import Line from "../common/Line";
import MessageRoom from "./messageRoom";
import useMessage from "../../hooks/useMessage";

const Container = styled.div`
  width: 100%;
  height: 59rem;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 1rem;
  position: relative;
`;

const Top = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
  :nth-of-type(1) {
    margin-left: 2.2rem;
  }
`;
const Category = styled.button<{ currentTab: boolean }>`
  ${({ currentTab }) => `
  color: ${currentTab ? "black" : GREY[600]};
`}
  padding: 1.6rem 0.4rem;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  z-index: 997;
  text-align: center;
  position: relative;
  background-color: transparent;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 53.5rem;
  position: absolute;
  top: 0;
`;

const StyledLine = styled(Line)`
  position: absolute;
  bottom: 0;
  z-index: -1;
  border-bottom: 0.3rem solid black;
`;
const Paging = styled.div`
  height: 5rem;
  width: 30rem;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const PageButton = styled.button<{ currentPage: boolean }>`
  ${({ currentPage }) => `
  background-color: ${currentPage ? INDIGO_DARK : "transparent"};
  color: ${currentPage ? "white" : GREY[600]};
  border: ${currentPage ? "none" : `0.1rem solid ${GREY[400]}`};
  border-radius: 50rem;
  font-size: 1.6rem;
  padding: ${currentPage ? "0.4rem 0.9rem" : "0.3rem 0.8rem"};
  cursor: pointer;
  ${
    !currentPage &&
    `
      &:hover {
    color: ${GREY[900]};
    border: 0.1rem solid ${GREY[700]};
  }`
  }
`}
`;

export default function Message() {
  const {
    TabList,
    currentTab,
    onChangeTab,
    msgReceivedData,
    msgReceivedSize,
    currentPage,
    onChangePage,
    msgSendData,
    msgSendSize,
  } = useMessage();
  return (
    <Container>
      <Top>
        <>
          {TabList.map(item => {
            return (
              <Wrapper key={item}>
                <Category
                  currentTab={currentTab === item}
                  onClick={() => onChangeTab(item)}
                >
                  {item}
                </Category>
                {currentTab === item && (
                  <StyledLine width="9rem" color={GREY[800]} />
                )}
              </Wrapper>
            );
          })}
        </>
      </Top>
      <Line color={GREY[300]} width="100%" />

      <Bottom>
        {currentTab === TabList[0] ? (
          <>
            <MessageRoom data={msgReceivedData.data} />
            <Paging>
              {msgReceivedSize?.map(i => (
                <PageButton
                  currentPage={currentPage === i}
                  onClick={() => {
                    onChangePage("RECEIVED", i);
                  }}
                >
                  {i + 1}
                </PageButton>
              ))}
            </Paging>
          </>
        ) : (
          <>
            <MessageRoom data={msgSendData.data} />
            <Paging>
              {msgSendSize?.map(i => (
                <PageButton
                  currentPage={currentPage === i}
                  onClick={() => {
                    onChangePage("SEND", i);
                  }}
                >
                  {i + 1}
                </PageButton>
              ))}
            </Paging>
          </>
        )}
      </Bottom>
    </Container>
  );
}

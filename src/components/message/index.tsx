/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import styled from "@emotion/styled";
import Pagination from "react-js-pagination";
import { GREY, INDIGO_DARK } from "../../constants/colors";
import Line from "../common/Line";
import MessageRoom from "./messageRoom";
import useMessage from "../../hooks/useMessage";
import Icon from "../common/Icon";

export default function Message() {
  const {
    TabList,
    currentTab,
    onChangeTab,
    msgReceivedData,
    msgReceivedSize,
    currentSendPage,
    currentReceivedPage,
    setReceivedPage,
    setSendPage,
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
            <MessageRoom data={msgReceivedData.data} type="RECEIVED" />
            <Line color={GREY[300]} width="100%" />
            <Paging>
              <Pagination
                activePage={currentReceivedPage}
                itemsCountPerPage={4}
                totalItemsCount={msgReceivedSize}
                pageRangeDisplayed={5}
                prevPageText={<Icon className="arrowLeft" size="1.2rem" />}
                nextPageText={<Icon className="arrowRight" size="1.2rem" />}
                hideFirstLastPages
                onChange={setReceivedPage}
              />
            </Paging>
          </>
        ) : (
          <>
            <MessageRoom data={msgSendData.data} type="SEND" />
            <Line color={GREY[300]} width="100%" />
            <Paging>
              <Pagination
                activePage={currentSendPage}
                itemsCountPerPage={4}
                totalItemsCount={msgSendSize}
                pageRangeDisplayed={5}
                prevPageText={<Icon className="arrowLeft" size="1.2rem" />}
                nextPageText={<Icon className="arrowRight" size="1.2rem" />}
                hideFirstLastPages
                onChange={setSendPage}
              />
            </Paging>
          </>
        )}
      </Bottom>
    </Container>
  );
}

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
  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${GREY[600]};
    border-radius: 5rem;
  }

  ul.pagination li:first-child {
    border-radius: 1rem;
  }

  ul.pagination li:last-child {
    border-radius: 1rem;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${GREY[600]};
    font-size: 1.5rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: ${INDIGO_DARK};
  }
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

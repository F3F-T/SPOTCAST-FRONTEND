import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import InfiniteScrollComponent from "react-infinite-scroll-component";
import InfiniteScroll from "react-infinite-scroller";
import Modal from "../common/Modal";
import { useBookmarkModal } from "../../hooks/useModal";
import Line from "../common/Line";
import { GREY } from "../../constants/colors";
import IconButton from "../common/IconButton";
import PersonCard from "./personCard";

const Top = styled.div`
  padding: 1.3rem 0 1.3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;
`;

const Name = styled.div`
  position: relative;
  font-size: 1.4rem;
  padding-left: 0.7rem;
  font-weight: 700;
`;

const StyledIcon = styled(IconButton)`
  position: absolute;
  overflow: auto;
  right: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 50rem;
`;
export default function BookMarkModal() {
  const { closeBookmarkModal, loadNext } = useBookmarkModal();
  const { following } = useSelector(state => state.bookmark);

  return (
    <Modal closeModal={closeBookmarkModal}>
      <div>
        <Top>
          <Name>내가 즐겨찾는 사람</Name>
          <StyledIcon
            onClick={closeBookmarkModal}
            IconName="close"
            color={GREY[800]}
            size="1.5rem"
          />
        </Top>
        <Line width="100%" color={GREY[400]} />
        <Container id="scrollableDiv">
          <InfiniteScrollComponent
            dataLength={300}
            next={loadNext}
            hasMore
            loader={<h4 style={{ textAlign: "center" }}>Loading.....</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>You read all new posts.</b>
              </p>
            }
            scrollableTarget="scrollableDiv"
            height={400}
          >
            {following.map(data => {
              return <PersonCard data={data} />;
            })}
          </InfiniteScrollComponent>
        </Container>
        {/* <Container id="scrollableDiv">
          <InfiniteScroll
            pageStart={0}
            loadMore={loadNext}
            hasMore
            height={400}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
            useWindow={false}
          >
            {following.map(data => {
              return <PersonCard data={data} />;
            })}
          </InfiniteScroll>
        </Container> */}
      </div>
    </Modal>
  );
}

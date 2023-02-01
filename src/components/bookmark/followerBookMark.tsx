import React from "react";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";
import Modal from "../common/Modal";
import { useFollowerBookmarkModal } from "../../hooks/useModal";
import Line from "../common/Line";
import { GREY } from "../../constants/colors";
import IconButton from "../common/IconButton";
import PersonCard from "./personCard";
import { IBookmark } from "../../interface/bookmark";
import LoadingBar from "../common/LoadingBar";

const Top = styled.div`
  padding: 1.3rem 0 1.3rem 0;
  width: 53rem;
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
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function FollowingBookMarkModal() {
  const {
    closeBookmarkModal,
    loadNext,
    follower,
    hasMoreFollower,
    loadFollowerLoading,
    loadFollowerDone,
  } = useFollowerBookmarkModal();

  return (
    <Modal closeModal={closeBookmarkModal}>
      <div>
        <Top>
          <Name>나를 즐겨찾는 사람</Name>
          <StyledIcon
            onClick={closeBookmarkModal}
            IconName="close"
            color={GREY[800]}
            size="1.5rem"
          />
        </Top>
        <Line width="100%" color={GREY[400]} />
        <Container style={{ height: "500px", overflow: "auto" }}>
          {(loadFollowerLoading || loadFollowerDone) && (
            <InfiniteScroll
              pageStart={0}
              loadMore={() => {
                const num = Math.floor(follower.length / 6);
                loadNext(num);
              }}
              hasMore={hasMoreFollower}
              loader={<LoadingBar type={6} />}
              useWindow={false}
            >
              {follower.map((data: IBookmark) => {
                return <PersonCard data={data} type="FOLLOWER" />;
              })}
            </InfiniteScroll>
          )}
        </Container>
      </div>
    </Modal>
  );
}

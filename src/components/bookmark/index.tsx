import React from "react";
import useSWR from "swr";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import {
  useFollowerBookmarkModal,
  useFollowingBookmarkModal,
} from "../../hooks/useModal";
import { loadMyInfo } from "../../api/auth";
import swrKeys from "../../constants/swrKeys";

const BookmarkButton = styled.button`
  display: flex;
  flex-direction: column;
  color: ${GREY[600]};
  font-size: 1.4rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${GREY[800]};
  &:hover {
    color: ${GREY[500]};
  }
`;

const Count = styled.div`
  padding-bottom: 1rem;
  width: 100%;
  text-align: start;
  font-weight: 700;
  font-size: 1.5rem;
`;
const Text = styled.div`
  width: 100%;
  text-align: start;
`;
export default function Bookmark() {
  const { openBookmarkModal: openFollowingModal } = useFollowingBookmarkModal();
  const { openBookmarkModal: openFollowerModal } = useFollowerBookmarkModal();

  const { data: me } = useSWR(swrKeys.loadMeKey, loadMyInfo);
  return (
    <>
      <BookmarkButton
        onClick={() => {
          openFollowingModal();
        }}
      >
        <Count>{me?.following}</Count>
        <Text>내가 즐겨찾는 사람</Text>
      </BookmarkButton>
      <BookmarkButton
        onClick={() => {
          openFollowerModal();
        }}
      >
        <Count>{me?.follower}</Count>
        <Text>나를 즐겨찾는 사람</Text>
      </BookmarkButton>
    </>
  );
}

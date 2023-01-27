import React, { useState } from "react";
import styled from "@emotion/styled";
import Inform from "./inform";
import Tab from "./tab";
import {
  useFollowerBookmarkModal,
  useFollowingBookmarkModal,
} from "../../../hooks/useModal";
import FollowingBookMarkModal from "../../bookmark/followingBookMark";
import FollowerBookMarkModal from "../../bookmark/followerBookMark";

const Container = styled.div`
  width: 100%;
  height: 90rem;
  display: flex;
  justify-content: space-between;
`;

export default function UserProfile() {
  const [openForm, setOpenForm] = useState(false);
  const { isFollowerModalOpen } = useFollowerBookmarkModal();
  const { isFollowingModalOpen } = useFollowingBookmarkModal();
  return (
    <Container>
      <Inform openForm={openForm} setOpenForm={setOpenForm} />
      <Tab openForm={openForm} setOpenForm={setOpenForm} />
      {isFollowingModalOpen && <FollowingBookMarkModal />}
      {isFollowerModalOpen && <FollowerBookMarkModal />}
    </Container>
  );
}

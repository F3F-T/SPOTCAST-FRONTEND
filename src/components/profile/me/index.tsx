import React, { useState } from "react";
import styled from "@emotion/styled";
import Inform from "./inform";
import Tab from "./tab";
import { useBookmarkModal } from "../../../hooks/useModal";
import BookMarkModal from "../../bookmark/bookMarkModal";

const Container = styled.div`
  width: 100%;
  height: 90rem;
  display: flex;
  justify-content: space-between;
`;

export default function UserProfile() {
  const [openForm, setOpenForm] = useState(false);
  const { isBookmarkModalOpen } = useBookmarkModal();
  return (
    <Container>
      <Inform openForm={openForm} setOpenForm={setOpenForm} />
      <Tab openForm={openForm} setOpenForm={setOpenForm} />
      {isBookmarkModalOpen && <BookMarkModal />}
    </Container>
  );
}

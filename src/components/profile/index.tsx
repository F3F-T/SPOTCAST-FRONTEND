import React, { useState } from "react";
import styled from "@emotion/styled";
import Inform from "./inform";
import Tab from "./tab";
import useAuth from "../../hooks/useAuth";

const Container = styled.div`
  width: 100%;
  height: 90rem;
  display: flex;
  justify-content: space-between;
`;

export default function UserProfile() {
  const [openForm, setOpenForm] = useState(false);
  useAuth(true);
  return (
    <Container>
      <Inform />
      <Tab openForm={openForm} setOpenForm={setOpenForm} />
    </Container>
  );
}

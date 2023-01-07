import React, { useState } from "react";
import styled from "@emotion/styled";
import Inform from "./inform";

import Tab from "./tab";

const Container = styled.div`
  width: 100%;
  height: 90rem;
  display: flex;
  justify-content: space-between;
`;

export default function UserProfile() {
  const [openForm, setOpenForm] = useState(false);

  return (
    <Container>
      <Inform />
      <Tab openForm={openForm} setOpenForm={setOpenForm} />
    </Container>
  );
}

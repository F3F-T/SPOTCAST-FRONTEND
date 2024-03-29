import React from "react";
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
  return (
    <Container>
      <Inform />
      <Tab />
    </Container>
  );
}

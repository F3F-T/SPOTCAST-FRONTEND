import styled from "@emotion/styled";
import React from "react";
import { INDIGO } from "../../../constants/colors";
import CardCategory from "./CardCategory";
import CardDetail from "./CardDetail";

const Container = styled.div`
  width: 87rem;
  height: 15rem;
  background-color: white;
  border: 0.1rem solid ${INDIGO};
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
export default function RecruitCard() {
  return (
    <Container>
      <CardDetail />
      <CardCategory />
    </Container>
  );
}

import styled from "@emotion/styled";
import React from "react";
import { INDIGO } from "../../../constants/colors";
import CardCategory from "./CardCategory";
import CardDetail from "./CardDetail";
import useRecruit from "../../../hooks/useRecruit";

const Container = styled.div`
  width: 87rem;
  height: 15rem;
  background-color: white;
  border: 0.1rem solid ${INDIGO};
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.div`
  cursor: pointer;
  background-color: transparent;
`;
export default function RecruitCard() {
  const { replacePostPage } = useRecruit();

  return (
    <Button onClick={replacePostPage}>
      <Container>
        <CardDetail />
        <CardCategory />
      </Container>
    </Button>
  );
}

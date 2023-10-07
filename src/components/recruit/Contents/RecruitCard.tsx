import styled from "@emotion/styled";
import React from "react";
import { INDIGO } from "../../../constants/colors";
import CardCategory from "./CardCategory";
import CardDetail from "./CardDetail";
import useRecruit from "../../../hooks/useRecruit";
import { IBoard } from "../../../interface/borad";

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
export default function RecruitCard({ info }: { info: IBoard }) {
  const { replacePostPage } = useRecruit();

  return (
    <Button onClick={() => replacePostPage(info.id)}>
      <Container>
        <CardDetail info={info} />
        <CardCategory info={info} />
      </Container>
    </Button>
  );
}

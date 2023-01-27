import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";

const Container = styled.button`
  display: flex;
  flex-direction: column;
  color: ${GREY[600]};
  font-size: 1.4rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
  color: black;
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
export default function Follower() {
  return (
    <Container>
      <Count>5</Count>
      <Text>나를 즐겨찾는 사람</Text>
    </Container>
  );
}

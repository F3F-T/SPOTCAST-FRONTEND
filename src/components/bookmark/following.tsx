import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import { useFollowingBookmarkModal } from "../../hooks/useModal";

const Container = styled.button`
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
export default function Following() {
  const { openBookmarkModal } = useFollowingBookmarkModal();
  return (
    <Container
      onClick={() => {
        openBookmarkModal();
      }}
    >
      <Count>5</Count>
      <Text>내가 즐겨찾는 사람</Text>
    </Container>
  );
}

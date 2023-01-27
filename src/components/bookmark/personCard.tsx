import styled from "@emotion/styled";
import React from "react";
import { GREY } from "../../constants/colors";

const Container = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-bottom: solid ${GREY[300]} 0.1rem;
  &:hover {
    cursor: pointer;
    background-color: ${GREY[100]};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  align-items: center;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 10rem;
  background-color: ${GREY[400]};
`;

const Name = styled.div`
  width: 40rem;
  position: relative;
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
`;

const Date = styled.div`
  font-size: 1.4rem;
  color: ${GREY[500]};
`;

export default function PersonCard({ data }) {
  return (
    <Container>
      <Wrapper>
        {data.bookmarkId}
        <Img />
        <div>
          <Name>{data.name}</Name>
          <Date>{data.email}</Date>
        </div>
      </Wrapper>
    </Container>
  );
}

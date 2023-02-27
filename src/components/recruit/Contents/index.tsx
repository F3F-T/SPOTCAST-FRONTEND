import React from "react";
import styled from "@emotion/styled";
import FilterTab from "./FilterTab";
import RecruitCard from "./RecruitCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

export default function Contents() {
  return (
    <Container>
      <FilterTab />
      <CardWrapper>
        <RecruitCard />
        <RecruitCard />
        <RecruitCard />
        <RecruitCard />
      </CardWrapper>
    </Container>
  );
}

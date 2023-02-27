import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../../constants/colors";

const Container = styled.div`
  width: 18rem;
`;

const Filter = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  padding-bottom: 2rem;
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.4rem;
`;

const Type = styled.div`
  font-size: 1.3rem;
  color: ${GREY[800]};
`;
export default function FilterTab() {
  return (
    <Container>
      <Filter>필터</Filter>
      <CheckBox>
        <input type="checkbox" />
        <Type>수익성</Type>
      </CheckBox>
      <CheckBox>
        <input type="checkbox" />
        <Type>비수익성(포트폴리오)</Type>
      </CheckBox>
    </Container>
  );
}

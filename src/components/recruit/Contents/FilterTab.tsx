import React, { useState } from "react";
import styled from "@emotion/styled";
import { GREY } from "../../../constants/colors";
import useRecruit from "../../../hooks/useRecruit";
import { PROFITABLE_STATUS } from "../../../constants/boardType";

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
  const { profitable, onChangeProfitable } = useRecruit();
  const checkList = [
    {
      label: "수익성",
      isChecked:
        profitable === PROFITABLE_STATUS.PROFITABLE ||
        profitable === PROFITABLE_STATUS.ALL,
      value: PROFITABLE_STATUS.PROFITABLE,
    },
    {
      label: "비수익성(포트폴리오)",
      isChecked:
        profitable === PROFITABLE_STATUS.NON_PROFITABLE ||
        profitable === PROFITABLE_STATUS.ALL,
      value: PROFITABLE_STATUS.NON_PROFITABLE,
    },
  ];
  return (
    <Container>
      <Filter>필터</Filter>
      {checkList.map((item, idx) => (
        <CheckBox>
          <input
            type="checkbox"
            checked={item.isChecked}
            onClick={() => {
              onChangeProfitable(
                checkList.map((check, i) =>
                  i === idx ? { ...check, isChecked: !check.isChecked } : check,
                ),
              );
            }}
          />
          <Type>{item.label}</Type>
        </CheckBox>
      ))}
    </Container>
  );
}

"use client";

import React from "react";
import styled from "@emotion/styled";
import Button from "../src/components/button";

const BTN_TYPE1 = styled(Button)``;
const BTN_TYPE2 = styled(Button)``;
const BTN_TYPE3 = styled(Button)``;

export default function Page() {
  return (
    <h1>
      Hello, Next.js!
      <BTN_TYPE1
        title="더 많은 영감 받으러가기 > "
        className="type1"
        type="primary"
        size="large"
      />
      <BTN_TYPE2 title="전체보기" className="type2" type="text" size="medium" />
      <BTN_TYPE3
        title="내 포트폴리오 등록"
        className="type3"
        type="secondary"
        size="small"
      />
    </h1>
  );
}

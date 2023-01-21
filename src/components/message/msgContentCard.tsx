import React from "react";
import styled from "@emotion/styled";
import { PreviewType } from "./fakeData";

const Content = styled.div`
  width: 100%;
  height: 70rem;
  display: flex;
  gap: 2rem;
  padding: 5rem 3rem;
  font-size: 1.4rem;
`;

export default function MsgContentCard({ item }: PreviewType) {
  return <Content>{item.content}</Content>;
}

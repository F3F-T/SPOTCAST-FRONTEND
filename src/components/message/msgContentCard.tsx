import React from "react";
import styled from "@emotion/styled";
import { MessageProps } from "../../interface/messgae";

const Content = styled.div`
  width: 100%;
  height: 70rem;
  display: flex;
  gap: 2rem;
  padding: 5rem 3rem;
  font-size: 1.4rem;
`;

export default function MsgContentCard({ item }: MessageProps) {
  return <Content>{item.content}</Content>;
}

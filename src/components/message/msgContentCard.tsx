import React from "react";
import styled from "@emotion/styled";
import { MessageProps } from "../../interface/messgae";

const Content = styled.div`
  width: 100%;
  height: 70rem;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  line-height: 1.5;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Title = styled.div`
  width: 100%;
  padding: 5rem 3rem 2rem 3rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

export default function MsgContentCard({ item }: MessageProps) {
  return (
    <>
      <Title>{item?.title}</Title>
      <Content>
        {item?.content.split("\n").map(line => {
          return (
            <>
              <span>{line}</span>
              <br />
            </>
          );
        })}
      </Content>
    </>
  );
}

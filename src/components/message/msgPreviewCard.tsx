import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import { MessageProps } from "../../interface/messgae";

const Preview = styled.div<{
  selected: boolean;
}>`
  ${({ selected }) => `
    background-color: ${selected ? GREY[200] : "transparent"};
`}
  width: 30rem;
  height: 12rem;
  border-bottom: 0.1rem solid ${GREY[300]};
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 10rem;
  background-color: ${GREY[400]};
`;

const Name = styled.div`
  width: 16rem;
  position: relative;
  font-size: 1.5rem;
`;
const Date = styled.span`
  position: absolute;
  right: 0;
  font-size: 1.2rem;
  color: ${GREY[500]};
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Content = styled.div`
  width: 16rem;
  height: 3rem;
  font-size: 1.3rem;
  line-height: 1.2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${GREY[600]};
`;

export default function MsgPreviewCard({
  item,
  selected = false,
}: MessageProps) {
  return (
    <Preview selected={selected}>
      <Img />
      <Right>
        <Name>
          {item.memberName} <Date>{item.createdDate.split("T")[0]}</Date>
        </Name>
        <Content>{item.title}</Content>
      </Right>
    </Preview>
  );
}

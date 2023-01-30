import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../../../constants/colors";
import { MessageProps } from "../../../../interface/messgae";

const Preview = styled.div<{
  selected: boolean;
}>`
  ${({ selected }) => `
    background-color: ${selected ? GREY[200] : "transparent"};
`}
  width: 100%;
  height: 8rem;
  border-bottom: 0.1rem solid ${GREY[100]};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  position: relative;
`;
const Left = styled.div`
  position: absolute;
  display: flex;
  left: 2rem;
  justify-content: start;
`;
const Img = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 10rem;
  background-color: ${GREY[400]};
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  justify-content: center;
  text-align: start;
  padding-left: 1.2rem;
`;
const Name = styled.div`
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
`;

const Content = styled.div`
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${GREY[600]};
`;
const Date = styled.span`
  position: absolute;
  right: 1.5rem;
  font-size: 1.2rem;
  color: ${GREY[500]};
  top: 1.5rem;
`;

export default function MessagePreview({
  item,
  selected = false,
}: MessageProps) {
  return (
    <Preview selected={selected}>
      <Left>
        <Img src={item?.memberProfile} />
        <Right>
          <Name>{item?.memberName}</Name>
          <Content>{item?.title}</Content>
        </Right>
      </Left>
      <Date>{item?.createdDate.split("T")[0]}</Date>
    </Preview>
  );
}

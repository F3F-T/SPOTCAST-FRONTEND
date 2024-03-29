import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import { MessageProps } from "../../interface/messgae";
import Icon from "../common/Icon";

const Preview = styled.div<{
  selected: boolean;
}>`
  ${({ selected }) => `
    background-color: ${selected ? GREY[200] : "transparent"};
`}
  width: 30rem;
  height: 12.1rem;
  border-bottom: 0.1rem solid ${GREY[300]};
  display: flex;
  position: relative;
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
  object-fit: cover;
  background-color: ${GREY[400]};
`;
const UserWrapper = styled.div`
  position: relative;
  display: flex;
`;
const Name = styled.div`
  width: 11rem;
  font-size: 1.5rem;
  padding-left: 0.7rem;
`;
const Date = styled.div`
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
      <Img src={item?.memberProfile} />
      <Right>
        <UserWrapper>
          {item?.readStatus ? (
            <Icon
              className="openMsg"
              size="1.3rem"
              border={0.1}
              color={GREY[500]}
            />
          ) : (
            <Icon
              className="contact"
              size="1.3rem"
              border={0.1}
              color={GREY[800]}
            />
          )}
          <Name>{item?.memberName}</Name>
          <Date>{item?.createdDate.split("T")[0]}</Date>
        </UserWrapper>
        <Content>{item?.title}</Content>
      </Right>
    </Preview>
  );
}

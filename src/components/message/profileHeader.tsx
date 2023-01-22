import styled from "@emotion/styled";
import React from "react";
import { GREY } from "../../constants/colors";
import { MessageProps } from "../../interface/messgae";
import Icon from "../common/Icon";

const Container = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;
  background-color: ${GREY[400]};
`;

const Name = styled.div`
  width: 10rem;
  position: relative;
  font-size: 1.4rem;
  padding-bottom: 0.2rem;
`;
const Date = styled.div`
  font-size: 1.2rem;
  color: ${GREY[500]};
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  padding-right: 2rem;
  display: flex;
  gap: 2rem;
`;
export default function ProfileHedaer({ item }: MessageProps) {
  return (
    <Container>
      <Wrapper>
        <Img />
        <div>
          <Name>{item.name}</Name>
          <Date>{item.date}</Date>
        </div>
      </Wrapper>
      <IconWrapper>
        <Icon
          className="personCard"
          border={0.1}
          size="2.6rem"
          color={GREY[700]}
        />
        <Icon className="reply" border={0.1} size="2.6rem" color={GREY[700]} />
        <Icon className="trash" border={0.1} size="2.6rem" color={GREY[700]} />
      </IconWrapper>
    </Container>
  );
}

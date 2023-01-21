import React, { useState } from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import MsgPreviewCard from "./msgPreviewCard";
import ProfileHedaer from "./profileHeader";
import fakeData from "./fakeData";
import MsgContentCard from "./msgContentCard";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

const Left = styled.div`
  width: 30rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 6rem;
`;
const Right = styled.div`
  width: 78rem;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;
const Button = styled.div`
  background-color: transparent;
  border: none;
`;

const Paging = styled.div`
  height: 3rem;
  font-size: 1.6rem;
  color: ${GREY[600]};
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  padding-bottom: 2rem;
`;
const VerticalLine = styled.div`
  width: 30rem;
  height: 100%;
  border-right: 0.1rem solid ${GREY[300]};
  position: absolute;
  display: block;
  z-index: -1;
`;
export default function MessageRoom() {
  const [currentMsg, setCurrentMsg] = useState(0);

  return (
    <Container>
      <VerticalLine />
      <Left>
        {fakeData.map(item => {
          return (
            <Button onClick={() => setCurrentMsg(item.id)}>
              <MsgPreviewCard item={item} selected={item.id === currentMsg} />
            </Button>
          );
        })}
        <Paging>1 2 3 4</Paging>
      </Left>
      <Right>
        <ProfileHedaer item={fakeData.find(item => item.id === currentMsg)!} />
        <MsgContentCard item={fakeData.find(item => item.id === currentMsg)!} />
        ;
      </Right>
    </Container>
  );
}

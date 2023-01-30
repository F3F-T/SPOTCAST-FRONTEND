import React, { useState } from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import MsgPreviewCard from "./msgPreviewCard";
import ProfileHedaer from "./profileHeader";
import MsgContentCard from "./msgContentCard";
import { IMessage } from "../../interface/messgae";
import useMessage from "../../hooks/useMessage";

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
  padding-top: 5.2rem;
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

const VerticalLine = styled.div`
  width: 30rem;
  height: 100%;
  border-right: 0.1rem solid ${GREY[300]};
  position: absolute;
  display: block;
  z-index: -1;
`;
const None = styled.div`
  height: 40rem;
  display: flex;
  align-items: center;
  color: ${GREY[600]};
  font-size: 1.5rem;
`;

export default function MessageRoom({
  data,
  type,
}: {
  data: IMessage[];
  type: string;
}) {
  const [currentMsg, setCurrentMsg] = useState<number>(0);
  const { readMsg } = useMessage();

  const onClickMsg = (messageId: number) => {
    setCurrentMsg(messageId);
    readMsg(messageId);
  };
  return (
    <Container>
      <VerticalLine />
      <Left>
        {data?.map(item => (
          <Button onClick={() => onClickMsg(item.id)}>
            <MsgPreviewCard item={item} selected={item.id === currentMsg} />
          </Button>
        ))}
        {data?.length === 0 && <None>메시지가 없습니다.</None>}
      </Left>
      <Right>
        <ProfileHedaer
          type={type}
          item={data?.find(item => item?.id === currentMsg)!}
        />
        <MsgContentCard item={data?.find(item => item?.id === currentMsg)!} />
      </Right>
    </Container>
  );
}

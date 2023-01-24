import React, { useState } from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import MsgPreviewCard from "./msgPreviewCard";
import ProfileHedaer from "./profileHeader";
import MsgContentCard from "./msgContentCard";
// import MsgModal from "./msgModal";
// import useMsgModal from "../../hooks/useModal";
import { IMessage } from "../../interface/messgae";
// import MsgModal from "./msgModal";

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

export default function MessageRoom({ data }: { data: IMessage[] }) {
  const [currentMsg, setCurrentMsg] = useState<number>(0);
  // const { isMsgModalOpen, openMsgModal } = useMsgModal();

  return (
    <Container>
      <VerticalLine />
      <Left>
        {data?.map(item => (
          <Button onClick={() => setCurrentMsg(item.id)}>
            <MsgPreviewCard item={item} selected={item.id === currentMsg} />
          </Button>
        ))}
        {data?.length === 0 && <None>메시지가 없습니다.</None>}
      </Left>
      <Right>
        <ProfileHedaer item={data?.find(item => item?.id === currentMsg)!} />
        <MsgContentCard item={data?.find(item => item?.id === currentMsg)!} />
      </Right>
      {/* <button onClick={() => openMsgModal()}>메시지 전송</button> */}
      {/* {isMsgModalOpen && <MsgModal />} */}
    </Container>
  );
}

import styled from "@emotion/styled";
import React from "react";
import useSWR from "swr";
import { useRouter } from "next/navigation";
import { GREY } from "../../../../constants/colors";
import Line from "../../../common/Line";
import Icon from "../../../common/Icon";
import { IMessage } from "../../../../interface/messgae";
import MessagePreview from "./MessagePreview";
import { loadMsgUnread } from "../../../../api/message";

const Container = styled.div`
  width: 40rem;
  height: 38rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[200]};
  position: absolute;
  margin-top: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const TitleWrapper = styled.div`
  width: 38rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.7rem 1.5rem;
  position: relative;
`;

const Title = styled.div`
  color: ${GREY[900]};
  font-size: 1.4rem;
`;
const ButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${GREY[700]};
  &:hover {
    font-weight: 700;
    color: ${GREY[900]};
    cursor: pointer;
  }
  font-size: 1.3rem;
  width: 100%;
`;

const PrevButton = styled.button`
  background-color: transparent;
  width: 40rem;
  border: none;
`;

export default function MessageModal({ showModal }: { showModal: Function }) {
  const router = useRouter();
  const { data } = useSWR("loadMsgUnread", () =>
    loadMsgUnread({ page: 0, size: 4 }),
  );
  return (
    <div>
      <Container>
        <TitleWrapper>
          <Title>메시지</Title>
          <ButtonWrapper>
            <Button
              onClick={() => {
                router.push("/message");
              }}
            >
              모든 메시지 보기
            </Button>
            <Icon className="arrowRight" border={0.4} size="1.3rem" />
          </ButtonWrapper>
        </TitleWrapper>
        <Line width="100%" color={GREY[300]} />
        <PrevButton
          onClick={() => {
            showModal("MESSAGE");
            router.push("/message");
          }}
        >
          {data?.content?.map((item: IMessage) => (
            <MessagePreview item={item} />
          ))}
        </PrevButton>
      </Container>
    </div>
  );
}

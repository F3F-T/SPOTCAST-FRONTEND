import styled from "@emotion/styled";
import React from "react";
import { GREY } from "../../constants/colors";
import useMessage from "../../hooks/useMessage";
import useMsgModal from "../../hooks/useModal";
import { MessageProps } from "../../interface/messgae";
import IconButton from "../common/IconButton";
import MsgModal from "./msgModal";

const Container = styled.div`
  width: 100%;
  height: 9rem;
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
  gap: 1rem;
`;
export default function ProfileHedaer({ item, type }: MessageProps) {
  const { replaceUserProfile, onClickDeleteMessage } = useMessage();
  const { isMsgModalOpen, openMsgModal } = useMsgModal({ item });

  return (
    <Container>
      <Wrapper>
        {item && <Img />}
        <div>
          <Name>{item?.memberName}</Name>
          <Date>{item?.createdDate}</Date>
        </div>
      </Wrapper>
      <IconWrapper>
        {item && (
          <IconButton
            IconName="personCard"
            border={0.1}
            size="2.6rem"
            color={GREY[700]}
            onClick={() => replaceUserProfile(item.memberId)}
          />
        )}
        {item && type === "RECEIVED" && (
          <IconButton
            IconName="reply"
            border={0.1}
            size="2.6rem"
            color={GREY[700]}
            onClick={() => openMsgModal()}
          />
        )}

        {item && (
          <IconButton
            IconName="trash"
            border={0.1}
            size="2.6rem"
            color={GREY[700]}
            onClick={() => {
              onClickDeleteMessage(item.id);
            }}
          />
        )}
      </IconWrapper>
      {isMsgModalOpen && <MsgModal item={item} />}
    </Container>
  );
}

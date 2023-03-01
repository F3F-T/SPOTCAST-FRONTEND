import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { GREY } from "../../constants/colors";
import useMessage from "../../hooks/useMessage";
import { useReplyMsgModal } from "../../hooks/useModal";
import { MessageProps } from "../../interface/messgae";
import { getDate, getTime } from "../../util/date";
import IconButton from "../common/IconButton";
import ReplyMsgModal from "./replyMsgModal";

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
  object-fit: cover;
  background-color: ${GREY[400]};
`;

const Name = styled.div`
  width: 55rem;
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
  const { isMsgModalOpen, openMsgModal } = useReplyMsgModal({ item });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (item?.createdDate) {
      setDate(getDate(item?.createdDate));
      setTime(getTime(item?.createdDate));
    }
  }, [item]);

  return (
    <Container>
      {item && (
        <Wrapper>
          <Img src={item?.memberProfile} />
          <div>
            <Name>
              {item?.memberName} {`<`}
              {item?.memberEmail}
              {`>`}
            </Name>

            <Date>
              {date} {time}
            </Date>
          </div>
        </Wrapper>
      )}
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
      {isMsgModalOpen && <ReplyMsgModal item={item} />}
    </Container>
  );
}

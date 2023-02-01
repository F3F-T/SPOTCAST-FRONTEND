import React from "react";
import styled from "@emotion/styled";
import Modal from "../common/Modal";
import { useReplyMsgModal } from "../../hooks/useModal";
import IconButton from "../common/IconButton";
import { GREY } from "../../constants/colors";
import Line from "../common/Line";
import Button from "../common/Button";
import { MessageProps } from "../../interface/messgae";

const Top = styled.div`
  padding: 0.3rem 0 1.3rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const Wrapper = styled.div`
  width: 47rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0 5rem 0;
`;
const Img = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 10rem;
  background-color: ${GREY[400]};
`;

const Name = styled.div`
  position: relative;
  font-size: 1.4rem;
  padding-left: 0.7rem;
  font-weight: 700;
`;

const StyledIcon = styled(IconButton)`
  position: absolute;
  right: 0;
`;
const Title = styled.input`
  border: none;
  border-bottom: 0.1rem solid ${GREY[400]};
  margin-bottom: 1rem;
  width: 100%;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const Content = styled.textarea`
  border: 0.1rem solid ${GREY[400]};
  border-radius: 0.5rem;
  width: 100%;
  padding: 2rem;
  height: 20rem;
  resize: none;
`;
const Bottom = styled.div`
  height: 6rem;
  position: relative;
  width: 94%;
`;

const StyledButton = styled(Button)`
  padding: 1.3rem 2.2rem;
  font-size: 1.3rem;
  margin-top: 1rem;
  position: absolute;
  right: 0;
  top: 0.5rem;
`;

const TextCount = styled.div`
  padding: 1rem 0.8rem;
  font-size: 1.1rem;
  width: 100%;
  text-align: end;
  font-weight: 300;
`;
export default function ReplyMsgModal({ item }: MessageProps) {
  const {
    title,
    onChangeTitle,
    content,
    onChangeContent,
    closeMsgModal,
    onSubmitMessage,
  } = useReplyMsgModal({ item });

  const closeModal = () => {
    closeMsgModal();
  };

  return (
    <Modal closeModal={closeModal}>
      <Top>
        <Img src={item?.memberProfile} />
        <Name>{item?.memberName}</Name>
        <StyledIcon
          onClick={closeModal}
          IconName="close"
          color={GREY[800]}
          size="2rem"
        />
      </Top>
      <Line width="100%" color={GREY[400]} />
      <Wrapper>
        <Title
          value={title}
          onChange={onChangeTitle}
          type="text"
          placeholder="제목을 입력해주세요."
        />
        <Content
          value={content}
          onChange={onChangeContent}
          placeholder="메시지 내용을 입력해주세요."
          maxLength={500}
        />
        <TextCount> {content.length}/500</TextCount>
      </Wrapper>

      <Line width="100%" color={GREY[400]} />
      <Bottom>
        {!(title.length > 0 && content.length > 0) ? (
          <StyledButton title="메시지 전송" buttonTheme="primary" disabled />
        ) : (
          <StyledButton
            onClick={() => onSubmitMessage()}
            title="메시지 전송"
            buttonTheme="primary"
          />
        )}
      </Bottom>
    </Modal>
  );
}

import React from "react";
import styled from "@emotion/styled";
import Button from "../../common/Button";
import { GREY, MUSTARD } from "../../../constants/colors";
import { getUser, getMe } from "../../../util/lib";
import { FieldProps } from "../../../interface/user";
import Icon from "../../common/Icon";
import useBookmark from "../../../hooks/useBookmark";
import MsgModal from "../../message/msgModal";
import { useMsgModal } from "../../../hooks/useModal";

const Container = styled.div`
  width: 29rem;
  height: 70rem;
  background-color: white;
  display: block;
  flex-direction: column;
  font-size: 2.6rem;
  gap: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Name = styled.div`
  font-weight: 700;
`;
const Role = styled.div`
  color: ${GREY[600]};
  font-weight: 700;
  width: 20rem;
  display: flex;
`;
const EgName = styled.div`
  font-weight: 700;
  height: 4rem;
  margin-top: 1rem;
`;
const ProfileImg = styled.img`
  width: 29rem;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 0.5rem;
  object-fit: cover;
`;
const InformButton = styled(Button)`
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  width: 29rem;
  margin-top: 1rem;
`;
const OtherButton = styled.button`
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  width: 14rem;
  margin-top: 1rem;
  border: 0.1rem solid ${GREY[500]};
  color: ${GREY[500]};
  background-color: white;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  &:hover {
    color: ${GREY[600]};
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Inform() {
  const { user } = getUser();
  const { me } = getMe();
  const { onClickAddBookmark } = useBookmark();
  const { isMsgModalOpen, openMsgModal } = useMsgModal(user);

  return (
    <Container>
      <Wrapper>
        <Name>{user.name}</Name>
        <Role>
          {user.field &&
            user.field
              .filter((item: FieldProps) => item.exist === true)
              .map((item: FieldProps) => {
                return item.name;
              })
              .join(" ∙ ")}
        </Role>
      </Wrapper>
      <EgName>{user.egName}</EgName>
      <ProfileImg src="/images/img4.png" />
      <ButtonWrapper>
        <OtherButton onClick={() => onClickAddBookmark(me.id, user.id)}>
          <Icon className="starEmpty" border={0.1} color={MUSTARD} />
          Add to List
        </OtherButton>
        <OtherButton onClick={() => openMsgModal()}>
          <Icon className="contact" border={0.1} />
          Contact
        </OtherButton>
      </ButtonWrapper>
      <InformButton title="전체 포트폴리오 보기" buttonTheme="tertiary" />
      {isMsgModalOpen && <MsgModal user={user} />}
    </Container>
  );
}

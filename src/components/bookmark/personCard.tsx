import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import React from "react";
import { GREY } from "../../constants/colors";
import useBookmark from "../../hooks/useBookmark";
import { BookmarkProps } from "../../interface/bookmark";
import { getMe } from "../../util/lib";
import Icon from "../common/Icon";

const Container = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  border-bottom: solid ${GREY[300]} 0.1rem;
  &:hover {
    background-color: ${GREY[100]};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  align-items: center;
  position: relative;
  width: 50rem;
`;

const Img = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 10rem;
  background-color: ${GREY[400]};
`;

const Name = styled.div`
  position: relative;
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
`;

const Date = styled.div`
  font-size: 1.4rem;
  color: ${GREY[500]};
`;

const Button = styled.button`
  position: absolute;
  border-radius: 30rem;
  border: 0.1rem solid ${GREY[300]};
  right: 2rem;
  background-color: white;
  padding: 1.3rem 3rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 1.4rem;
  cursor: pointer;
`;
const NoneButton = styled.button`
  border: none;
  background-color: transparent;
  text-align: start;
  z-index: 999;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0;
  cursor: pointer;
`;
export default function PersonCard({ data, type }: BookmarkProps) {
  const router = useRouter();
  const { me } = getMe();
  const { onClickAddBookmark, onClickDeleteBookmark } = useBookmark();
  return (
    <Container>
      <Wrapper>
        <NoneButton
          onClick={() => {
            router.push(`/user/${data.memberId}`);
          }}
        >
          <Img src={data.profile} />
          <div>
            <Name>{data.name}</Name>
            <Date>{data.email}</Date>
          </div>
        </NoneButton>
        {type === "FOLLOWING" && (
          <Button onClick={() => onClickDeleteBookmark(me.id, data.memberId)}>
            <Icon
              className="unfollow"
              color={GREY[700]}
              border={0.1}
              size="1.7rem"
            />
            삭제
          </Button>
        )}
        {type === "FOLLOWER" && !data.exist && (
          <Button onClick={() => onClickAddBookmark(me.id, data.memberId)}>
            <Icon
              className="follow"
              border={0.1}
              color={GREY[700]}
              size="1.7rem"
            />
            추가
          </Button>
        )}
      </Wrapper>
    </Container>
  );
}

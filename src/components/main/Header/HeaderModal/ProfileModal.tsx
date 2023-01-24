import styled from "@emotion/styled";
import React from "react";
import { useRouter } from "next/navigation";
import { GREY, INDIGO } from "../../../../constants/colors";
import useLogin from "../../../../hooks/useLogin";
import Line from "../../../common/Line";
import { getUser } from "../../../../lib/utils";

const Container = styled.div`
  width: 34rem;
  height: 28rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[200]};
  position: absolute;
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
`;
const Button = styled.button`
  width: 37.5rem;
  font-size: 1.4rem;
  padding: 0.7rem;
  background-color: transparent;
  border: none;
  text-align: start;
  color: ${GREY[700]};
  padding-left: 2.5rem;

  &:hover {
    font-weight: 700;
    color: ${INDIGO};
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.div``;
const UserWrapper = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: row;
  gap: 0.9rem;
  align-items: center;
  padding: 1rem 2.5rem 1rem 2.5rem;
`;

const Image = styled.img`
  width: 5.7rem;
  height: 5.7rem;
  border-radius: 30rem;
  object-fit: cover;
`;

const Name = styled.div`
  font-size: 1.9rem;
  font-weight: 700;
  padding-bottom: 0.8rem;
  color: ${GREY[900]};
`;

const Email = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${GREY[600]};
`;
export default function ProfileModal() {
  const { useLogout } = useLogin();
  const { me } = getUser();
  const router = useRouter();
  return (
    <Container>
      <div>
        <UserWrapper>
          <Image src="/images/img4.png" />
          <div>
            <Name>{me.name}</Name>
            <Email>{me.email}</Email>
          </div>
        </UserWrapper>
      </div>
      <Line width="100%" color={GREY[300]} />
      <ButtonWrapper>
        <Button
          onClick={() => {
            router.push("/profile");
          }}
        >
          나의 프로필
        </Button>
        <Button>즐겨찾기</Button>
        <Button>스크랩</Button>
      </ButtonWrapper>
      <Line width="100%" color={GREY[300]} />
      <ButtonWrapper>
        <Button onClick={useLogout}>로그아웃</Button>{" "}
      </ButtonWrapper>
    </Container>
  );
}

import styled from "@emotion/styled";
import React from "react";
import { GREY } from "../../../../constants/colors";
import useLogin from "../../../../hooks/useLogin";
import Line from "../../../common/Line";

const Container = styled.div`
  width: 20rem;
  height: 29rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[200]};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
const Button = styled.button`
  width: 18rem;
  font-size: 1.4rem;
  padding: 1rem;
  background-color: transparent;
  border: none;
  color: ${GREY[700]};
  &:hover {
    background-color: ${GREY[100]};
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export default function ProfileModal() {
  const { useLogout } = useLogin();
  return (
    <Container>
      <Button>프로필</Button>
      <Button>지원 현황</Button>
      <Button>포트폴리오 관리</Button>
      <Button>즐겨찾기</Button>
      <Button>스크랩</Button>
      <Line width="18rem" color={GREY[300]} />
      <Button onClick={useLogout}>로그아웃</Button>
    </Container>
  );
}

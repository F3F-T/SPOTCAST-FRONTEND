import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { GREY, INDIGO } from "../../../../constants/colors";
import Line from "../../../common/Line";

const Container = styled.div`
  width: 34rem;
  height: 15rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[200]};
  position: absolute;
  display: flex;
  margin-top: 0.8rem;
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

const Ment = styled.div`
  padding-left: 2.3rem;
`;
export default function Unknown() {
  return (
    <Container>
      <Ment>로그인 후 이용해주세요!</Ment>
      <Line width="100%" color={GREY[300]} />
      <div>
        <Button>
          <Link href="/login">로그인</Link>
        </Button>
        <Button>
          <Link href="/signup">회원가입 🙋‍♀️</Link>
        </Button>
      </div>
    </Container>
  );
}

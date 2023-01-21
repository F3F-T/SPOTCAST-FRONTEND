import styled from "@emotion/styled";
import React from "react";
import { useRouter } from "next/navigation";
import { GREY } from "../../../../constants/colors";
import Line from "../../../common/Line";
import Icon from "../../../common/Icon";

const Container = styled.div`
  width: 40rem;
  height: 52rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[200]};
  position: absolute;
  margin-top: 1.3rem;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
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
`;

export default function MessageModal() {
  const router = useRouter();
  return (
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
    </Container>
  );
}

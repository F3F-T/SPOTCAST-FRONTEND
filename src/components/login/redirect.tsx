import React, { useEffect } from "react";
import styled from "@emotion/styled";
import useLogin from "../../hooks/useLogin";
import { GREY } from "../../constants/colors";
import LoadingBar from "../common/LoadingBar";

const Container = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Title = styled.div`
  font-size: 3rem;
  padding-bottom: 1.3rem;
  font-weight: 700;
`;

const Comment = styled.div`
  font-size: 1.8rem;
  color: ${GREY[500]};
`;

export default function Redirct() {
  const { useoAuthRedirct } = useLogin();

  useEffect(() => {
    useoAuthRedirct();
  }, []);

  return (
    <Container>
      <Title>SPOTCAST</Title>
      <Comment>
        로그인 진행중 <LoadingBar type={6} />
      </Comment>
    </Container>
  );
}

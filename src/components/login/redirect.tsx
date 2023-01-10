import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { AppDispatch } from "../../../stores/store/configureStore";
import { loginTest } from "../../../stores/reducers/user";
import { GREY } from "../../constants/colors";

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
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      const prevPath = sessionStorage.getItem("prevPath");
      localStorage.setItem("access_token", token);
      dispatch(loginTest()); // TEST
      router.push(`${prevPath}`);
    }
  }, []);

  return (
    <Container>
      <Title>SPOTCAST</Title>
      <Comment>이전 페이지로 돌아가는중 • • •</Comment>
    </Container>
  );
}

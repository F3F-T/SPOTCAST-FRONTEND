/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from "react";
import Input from "../../common/Input";
import useInput from "../../../hooks/useInput";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Form,
  SubmitButton,
  CheckBox,
  Agree,
  AgreeButton,
  EtcWrapper,
} from "./index.styles";
import { useSignUp } from "../../../hooks/useAuth";

export default function Login() {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      useSignUp(email, password);
    },
    [email, password, passwordCheck],
  );

  return (
    <Container>
      <Wrapper>
        <Title>SPOTCAST</Title>
        <SubTitle>이메일로 가입하기</SubTitle>
        <Form onSubmit={onSubmitForm}>
          <Input
            value={email}
            onChange={onChangeEmail}
            size={35}
            label="이메일"
            type="email"
            required
          />
          <Input
            value={password}
            onChange={onChangePassword}
            size={35}
            label="비밀번호"
            type="password"
            required
          />
          <Input
            value={passwordCheck}
            onChange={onChangePasswordCheck}
            size={35}
            label="비밀번호 확인"
            type="password"
            required
          />
          <EtcWrapper>
            <CheckBox type="checkbox" required />
            <Agree>SPOTCAST 가입 약관에 모두 동의합니다.</Agree>
            <AgreeButton>확인하기</AgreeButton>
          </EtcWrapper>
          <SubmitButton>다음</SubmitButton>
        </Form>
      </Wrapper>
    </Container>
  );
}
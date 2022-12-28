import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
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
import { authSignUp } from "../../../api/auth";

export default function Login() {
  const router = useRouter();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      authSignUp(email, password)
        .then(res => {
          console.log("가입된 이메일로 인증 메일을 발송했습니다.");
          console.log(res.data);
        })
        .catch(err => {
          if (err.response.data.message === "이미 있으면") {
            console.error("이미 있는 이메일입니다");
          }
        });
      router.replace("/");
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

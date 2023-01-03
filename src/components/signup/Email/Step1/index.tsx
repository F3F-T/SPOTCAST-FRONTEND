/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Input from "../../../common/Input";
import {
  Container,
  Wrapper,
  FormWrapper,
  Title,
  SubTitle,
  Ment,
  Form,
  EmailWrapper,
  AuthButton,
  LeftButton,
  RightButton,
  ButtonDisabled,
  Wrong,
  ButtonWrapper,
  CheckBox,
  Agree,
  AgreeButton,
  EtcWrapper,
} from "./index.styles";

import useSignUp from "../../../../hooks/useSignUp";

export default function Step1() {
  const {
    email,
    isValidEmail,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    onCheckEmailAuth,
    onReplaceBack,
    onReplaceNext,
  } = useSignUp();

  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <div>
            <Title>SPOTCAST</Title>
            <SubTitle>이메일로 가입하기</SubTitle>
            <Ment>반갑습니다 👋</Ment>
          </div>
          <Form>
            <div>
              <EmailWrapper>
                <Input
                  value={email}
                  onChange={onChangeEmail}
                  size={23}
                  label="이메일 주소"
                  type="email"
                  required
                />
                {isValidEmail ? (
                  <AuthButton
                    title="인증"
                    width="6.5rem"
                    onClick={onCheckEmailAuth}
                  />
                ) : (
                  <AuthButton title="인증" width="6.5rem" disabled />
                )}
              </EmailWrapper>
              {!isValidEmail && email.length > 0 && (
                <Wrong>이메일 형식이 올바르지 않습니다.</Wrong>
              )}
            </div>
            <Input
              value={password}
              onChange={onChangePassword}
              size={30}
              label="비밀번호"
              type="password"
            />
            <div>
              <Input
                value={passwordCheck}
                onChange={onChangePasswordCheck}
                size={30}
                label="비밀번호 확인"
                type="password"
              />
              {passwordCheck.length > 0 && password !== passwordCheck ? (
                <Wrong>비밀번호가 일치하지 않습니다.</Wrong>
              ) : null}
            </div>
            {/*            
            <EtcWrapper>
              <CheckBox type="checkbox" required />
              <Agree>SPOTCAST 가입 약관에 모두 동의합니다.</Agree>
              <AgreeButton>확인하기</AgreeButton>
            </EtcWrapper> */}
            <ButtonWrapper>
              <LeftButton
                onClick={onReplaceBack}
                buttonTheme="tertiary"
                title="이전"
              />
              {isValidEmail && password === passwordCheck ? (
                <RightButton onClick={onReplaceNext} title="다음" />
              ) : (
                <ButtonDisabled title="다음" disabled />
              )}
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

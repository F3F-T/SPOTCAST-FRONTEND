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
} from "./index.styles";

import useSignUp from "../../../../hooks/useSignUp";

export default function Step1() {
  const {
    email,
    isValidEmail,
    authNumber,
    onChangeAuthNumber,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    isEmailConfirms,
    onSubmitEmailAuth,
    onReplaceBack,
    onReplaceNext,
    AuthTimer,
  } = useSignUp();

  const { time, min, sec, onStartTimer } = AuthTimer();
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
                    title={min < 1 ? "재전송" : "인증"}
                    width="6.5rem"
                    onClick={onStartTimer}
                  />
                ) : (
                  <AuthButton title="인증" width="6.5rem" disabled />
                )}
              </EmailWrapper>
              {!isValidEmail && email.length > 0 && (
                <Wrong>이메일 형식이 올바르지 않습니다.</Wrong>
              )}
            </div>
            {min < 1 && (
              <div>
                <EmailWrapper>
                  <Input
                    value={authNumber}
                    onChange={onChangeAuthNumber}
                    size={21}
                    label="인증번호 입력"
                    type="text"
                    required
                  />
                  {authNumber.length === 6 ? (
                    <AuthButton
                      title="인증 완료"
                      width="9rem"
                      onClick={onSubmitEmailAuth}
                    />
                  ) : (
                    <AuthButton title="인증 완료" width="9rem" disabled />
                  )}
                </EmailWrapper>
                {time.current <= 0 ? (
                  <Wrong>
                    입력시간이 초과되었습니다. 재전송 버튼을 눌러주세요.
                  </Wrong>
                ) : (
                  <Wrong>
                    {min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}
                  </Wrong>
                )}
              </div>
            )}
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
            <ButtonWrapper>
              <LeftButton
                onClick={onReplaceBack}
                buttonTheme="tertiary"
                title="이전"
              />
              {isValidEmail && password === passwordCheck && isEmailConfirms ? (
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

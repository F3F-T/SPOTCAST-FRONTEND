import React from "react";
import Input from "../common/Input";
import {
  Container,
  Wrapper,
  Title,
  SubTitle,
  InputWrapper,
  LoginButton,
  CheckBox,
  AutoLogin,
  FindPW,
  EtcWrapper,
  SNSWrapper,
  ImgWrapper,
  SNSIMG,
  SignUp,
} from "./index.styles";

export default function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SPOTCAST </Title>
        <SubTitle>당신이 제일 빛나는 공간, 스팟캐스트</SubTitle>
        <InputWrapper>
          <Input size="35" label="이메일" type="text" />
          <Input size="35" label="비밀번호" type="password" />
        </InputWrapper>
        <LoginButton title="로그인" />
        <EtcWrapper>
          <CheckBox type="checkbox" />
          <AutoLogin>로그인 유지</AutoLogin>
          <FindPW>비밀번호 찾기 {">"}</FindPW>
        </EtcWrapper>
        <SNSWrapper>
          SNS로 간편하게 로그인
          <br />
          <ImgWrapper>
            <SNSIMG src="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png" />
            {/* <SNSIMG src = "https://i.pinimg.com/564x/fb/71/04/fb71048e03a5ada757f70d61b583d0bf.jpg"/> */}
            <SNSIMG src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png" />
          </ImgWrapper>
          <div>
            {" "}
            아직 스팟캐스트 회원이 아니세요?
            <br />
            <SignUp>회원가입하기</SignUp>
          </div>
        </SNSWrapper>
      </Wrapper>
    </Container>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import Button from "../common/Button";
import Input from "../common/Input";

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
          <AutoLogin>
            로그인 유지
          </AutoLogin>
          <FindPW>비밀번호 찾기 ></FindPW>
        </EtcWrapper>
        <SNSWrapper>SNS로 간편하게 로그인
          <br/>
          <ImgWrapper><SNSIMG src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"/>
          <SNSIMG src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"/>
          <SNSIMG src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"/>
          </ImgWrapper>
          아직 스팟캐스트 회원이 아니세요?
          <SignUp>회원가입하기</SignUp>
       </SNSWrapper>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

`;

const Wrapper = styled.div`
  width: 50rem;
  height: 60rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 0.1rem solid ${GREY[500]};
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 1rem;
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 3rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 3rem;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  width: 35rem;
  padding: 2.5rem 2rem;
  background-color: ${GREY[600]};
  border-radius: 0.5rem;
  &:hover {
    background-color: ${GREY[500]};
  }
  font-size: 1.4rem;
  font-weight: 700;
`;

const EtcWrapper = styled.div`
  width: 35rem;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 1.3rem;
  padding-bottom: 2rem;
`;
const AutoLogin = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding-left: 0.5rem;
  color: ${GREY[500]};
`;

const CheckBox = styled.input`
  transform : scale(1.3);
  border: 1px solid white;
`

const FindPW = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  font-size: 1.3rem;
  color: ${GREY[500]};
`;
const SNSWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
font-size: 1.3rem;
color: ${GREY[600]};
gap: 2rem;
`;
const ImgWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`
const SNSIMG = styled.img`
  width: 4.7rem;

`

const SignUp = styled.button`
  font-weight: 700;
  color: ${GREY[800]};
  background: none;
  border: none;
  text-decoration: underline;
`
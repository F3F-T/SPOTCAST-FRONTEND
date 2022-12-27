import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import Button from "../common/Button";
import LayoutContainer from "../../../styles/LayoutContainer";

export default function Signup() {
  return (
    <LayoutContainer>
      <Wrapper>
        <Title>SPOTCAST</Title>
        <SubTitle>
          스팟캐스트에 오신걸 환영해요!
          <br />
          당신이 빛날 차례에요.
        </SubTitle>
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
            아직 스팟캐스트 회원이 아니세요?
            <br />
            <SignUp>회원가입하기</SignUp>
          </div>
        </SNSWrapper>
      </Wrapper>
    </LayoutContainer>
  );
}

const Wrapper = styled.div`
  width: 47rem;
  height: 65rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 0.1rem solid ${GREY[400]};
  flex-direction: column;
  margin-top: 2rem;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 1rem;
`;

const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  padding-bottom: 3rem;
  text-align: center;
  line-height: 1.3;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 3rem;
  justify-content: center;
`;

const LoginButton = styled.button`
  margin-top: 1.5rem;
  width: 35rem;
  padding: 1.7rem 2rem;
  background-color: ${GREY[600]};
  border: none;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${GREY[500]};
  }
  font-size: 1.4rem;
  color: white;
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
  transform: scale(1.3);
  border: 1px solid white;
`;

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
  justify-content: center;
  gap: 1.5rem;
`;
const SNSIMG = styled.img`
  width: 4.7rem;
  height: 4.7rem;
  border-radius: 5rem;
`;

const SignUp = styled.button`
  font-weight: 700;
  color: ${GREY[800]};
  background: none;
  border: none;
  text-decoration: underline;
  padding-top: 0.5rem;
`;

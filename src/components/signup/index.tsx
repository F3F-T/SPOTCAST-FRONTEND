import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GREY } from "../../constants/colors";
import LayoutContainer from "../../../styles/LayoutContainer";
import {
  Wrapper,
  Title,
  SubTitle,
  ButtonWrapper,
  SNSButton,
  StyledLine,
  LoginWrapper,
  Login,
} from "./index.styles";

export default function Signup() {
  const router = useRouter();

  const googloSignup = `http://localhost:80/oauth2/authorization/google?redirect_uri=http://localhost:3000/redirect`;
  const kakaoSignup = ``;

  const EmailLogin = useCallback(() => {
    router.push("/signup/email");
  }, []);

  return (
    <LayoutContainer>
      <Wrapper>
        <Title>SPOTCAST</Title>
        <SubTitle>
          스팟캐스트에 오신걸 환영해요!
          <br />
          이제는 당신이 빛날 차례에요.
        </SubTitle>
        <ButtonWrapper>
          <SNSButton
            title="구글 계정으로 가입하기"
            ImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/320px-Google_%22G%22_Logo.svg.png"
            href={googloSignup}
            color={GREY[100]}
            size={2.3}
          />
          <SNSButton
            title="카카오 계정으로 가입하기"
            ImgSrc="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png"
            href={kakaoSignup}
            color="#f9da49"
            size={2.5}
          />
          <StyledLine width="100%" color={GREY[400]} />
          <SNSButton
            title="이메일로 가입하기"
            ImgSrc="none"
            size={2.5}
            onClick={EmailLogin}
          />
        </ButtonWrapper>
        <LoginWrapper>
          <div>
            계정이 있으신가요?
            <Login>
              <Link href="/login">로그인하기</Link>
            </Login>
          </div>
        </LoginWrapper>
      </Wrapper>
    </LayoutContainer>
  );
}

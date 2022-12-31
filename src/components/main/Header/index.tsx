import React, { useCallback } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/reducers";
import {
  Container,
  Wrapper,
  Logo,
  Ul,
  Li,
  Hover,
  Input,
  Login,
  StyledButton,
} from "./index.styles";

export default function Header() {
  // 상태관리 테스트
  const { IsUserLoggedIn, me } = useSelector((state: RootState) => state.user);
  console.log(IsUserLoggedIn);
  console.log(`me ??? ${me.email}`);

  const menu = [
    { name: "캐스팅/오디션", href: "/casting" },
    { name: "공개 포트폴리오", href: "/portfolio" },
    { name: "구인 공고", href: "/crew" },
    { name: "커뮤니티", href: "/community" },
  ];
  const aside = [
    { name: "로그인", href: "/login" },
    { name: "회원가입", href: "/signup" },
  ];

  const openPotfolioForm = useCallback(() => {}, []);

  return (
    <Container>
      <Wrapper>
        <Logo>SPOTCAST</Logo>
        <Ul>
          {menu.map(({ name, href }) => (
            <Li>
              <Link href={href}>
                <Hover>{name}</Hover>
              </Link>
            </Li>
          ))}
        </Ul>
        <Input />
        <aside>
          <Login>
            {aside.map(({ name, href }) => (
              <Link href={href}>
                <Hover>{name}</Hover>
              </Link>
            ))}
          </Login>
        </aside>
        <StyledButton
          size="large"
          title="내 포트폴리오 등록"
          onClick={openPotfolioForm}
        />
      </Wrapper>
      {IsUserLoggedIn ? me.email : null}
    </Container>
  );
}

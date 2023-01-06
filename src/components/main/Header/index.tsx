import React, { useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/reducers";
import Icon from "../../common/Icon";
import { MUSTARD } from "../../../constants/colors";
import {
  Container,
  Wrapper,
  Logo,
  Ul,
  Li,
  Hover,
  SearchBox,
  IconWrapper,
  Input,
  Login,
  LoggedIn,
  StyledButton,
} from "./index.styles";

export default function Header() {
  const { IsUserLoggedIn } = useSelector((state: RootState) => state.user);
  const router = useRouter();
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

  const openPotfolioForm = useCallback(() => {
    router.push("/pages/user-portfolio");
  }, []);

  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo>SPOTCAST</Logo>
        </Link>
        <Ul>
          {menu.map(({ name, href }) => (
            <Li>
              <Link href={href}>
                <Hover>{name}</Hover>
              </Link>
            </Li>
          ))}
        </Ul>
        <SearchBox>
          <IconWrapper>
            <Icon className="search" border={0.01} size="1.4rem" />
          </IconWrapper>
          <Input />
        </SearchBox>
        <aside>
          {IsUserLoggedIn ? (
            <LoggedIn>
              <Icon className="bell" border={0.3} size="2rem" color={MUSTARD} />
              <Icon className="msg" border={0.3} size="2rem" color={MUSTARD} />
              <Icon
                className="mypage"
                border={0.5}
                size="2.2rem"
                color={MUSTARD}
              />
              <StyledButton
                size="large"
                title="내 포트폴리오 등록"
                onClick={openPotfolioForm}
              />
            </LoggedIn>
          ) : (
            <Login>
              {aside.map(({ name, href }) => (
                <Link href={href}>
                  <Hover>{name}</Hover>
                </Link>
              ))}
              <StyledButton
                size="large"
                title="내 포트폴리오 등록"
                onClick={openPotfolioForm}
              />
            </Login>
          )}
        </aside>
      </Wrapper>
    </Container>
  );
}

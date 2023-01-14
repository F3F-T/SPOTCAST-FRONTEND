import React, { useCallback, useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "../../../../stores/reducers";
import Icon from "../../common/Icon";
import { MUSTARD } from "../../../constants/colors";
import ProfileModal from "./ProfileModal";
import {
  Container,
  Wrapper,
  Logo,
  Ul,
  Li,
  Hover,
  SearchBox,
  IconWrapper,
  UserWrapper,
  IconButton,
  Input,
  Login,
  LoggedIn,
  StyledButton,
} from "./index.styles";

export default function Header() {
  const { IsUserLoggedIn } = useSelector((state: RootState) => state.user);
  const [modalOpen, setModalOpen] = useState(false);

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

  const showModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <Container>
      <Wrapper>
        <Link href="/">
          <Logo>SPOTCAST</Logo>
        </Link>
        <Ul>
          {menu.map(({ name, href }) => (
            <Li key={name}>
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
              <IconButton>
                <Icon
                  className="bell"
                  border={0.3}
                  size="2rem"
                  color={MUSTARD}
                />
              </IconButton>
              <IconButton>
                <Icon
                  className="msg"
                  border={0.3}
                  size="2rem"
                  color={MUSTARD}
                />
              </IconButton>
              <UserWrapper>
                <IconButton onClick={showModal}>
                  <Icon
                    className="mypage"
                    border={0.5}
                    size="2.2rem"
                    color={MUSTARD}
                  />
                </IconButton>
                {modalOpen && <ProfileModal />}
              </UserWrapper>
              <StyledButton size="large" title="내 포트폴리오 관리" />
            </LoggedIn>
          ) : (
            <Login>
              {aside.map(({ name, href }) => (
                <Link key={name} href={href}>
                  <Hover>{name}</Hover>
                </Link>
              ))}
              <StyledButton size="large" title="내 포트폴리오 등록" />
            </Login>
          )}
        </aside>
      </Wrapper>
    </Container>
  );
}

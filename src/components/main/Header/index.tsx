import React from "react";
import Link from "next/link";
import Icon from "../../common/Icon";
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
} from "./index.styles";
import HeaderModal from "./HeaderModal";

export default function Header() {
  const menu = [
    { name: "캐스팅/오디션", href: "/casting?category=0&page=0" },
    { name: "공개 포트폴리오", href: "/portfolio" },
    { name: "구인 공고", href: "/recruit?category=0&page=0" },
    { name: "커뮤니티", href: "/community" },
  ];

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
        <HeaderModal />
      </Wrapper>
    </Container>
  );
}

import React, { useState } from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import Line from "../common/Line";
import MessageRoom from "./messageRoom";
import Icon from "../common/Icon";
import IconButton from "../common/IconButton";

const Container = styled.div`
  width: 100%;
  height: 59rem;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 1rem;
  position: relative;
`;

const Top = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  position: relative;
  :nth-child(1) {
    margin-left: 2.2rem;
  }
`;
const Category = styled.button<{ currentTab: boolean }>`
  ${({ currentTab }) => `
  color: ${currentTab ? "black" : GREY[600]};
`}
  padding: 1.6rem 0.4rem;
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  z-index: 997;
  text-align: center;
  position: relative;
  background-color: transparent;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 59rem;
  position: absolute;
  top: 0;
`;

const StyledLine = styled(Line)`
  position: absolute;
  bottom: 0;
  z-index: -1;
  border-bottom: 0.3rem solid black;
`;

const Button = styled.div`
  background-color: transparent;
  border: none;
  position: absolute;
  right: 2.4rem;
  top: 1.5rem;
  z-index: 50;
  cursor: pointer;
`;
const SearchbarWrapper = styled.div`
  font-size: 1.6rem;
  z-index: 70;
  display: flex;
  align-items: center;
  width: 25rem;
  padding: 0.95rem 0;
  gap: 1rem;
`;

const StyledInput = styled.input`
  background-color: #f2f2f2;
  border: none;
  border-radius: 0.5rem;
  padding: 0.8rem 1.2rem;
  width: 21rem;
  &:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  width: 3rem;
  top: 0.7rem;
  right: 1rem;
`;

export default function Message() {
  const [currentTab, setCurrentTab] = useState("받은 메시지");
  const [openSearchBar, setSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm);
  const list = ["받은 메시지", "보낸 메시지"];
  return (
    <Container>
      <Top>
        {openSearchBar ? (
          <SearchbarWrapper>
            <IconButton
              IconName="arrowLeft"
              onClick={() => setSearchBar(false)}
              size="2.3rem"
            />
            <IconWrapper>
              <StyledInput size={20} value={searchTerm} onChange={onChange} />
              <SearchIcon>
                <Icon className="search" size="1.7rem" />
              </SearchIcon>
            </IconWrapper>
          </SearchbarWrapper>
        ) : (
          <>
            {list.map(item => {
              return (
                <Wrapper>
                  <Category
                    currentTab={currentTab === item}
                    onClick={() => setCurrentTab(item)}
                  >
                    {item}
                  </Category>
                  {currentTab === item && (
                    <StyledLine width="9rem" color={GREY[800]} />
                  )}
                </Wrapper>
              );
            })}
            <Button onClick={() => setSearchBar(true)}>
              <Icon className="search" size="1.7rem" />
            </Button>
          </>
        )}
      </Top>
      <Line color={GREY[300]} width="100%" />
      <Bottom>
        {currentTab === "받은 메시지" ? (
          <MessageRoom searchTerm={searchTerm} />
        ) : (
          <MessageRoom searchTerm={searchTerm} />
        )}
      </Bottom>
    </Container>
  );
}

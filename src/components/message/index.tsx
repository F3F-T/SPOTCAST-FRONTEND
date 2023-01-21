import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import Line from "../common/Line";
import Icon from "../common/Icon";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import MessageRoom from "./messageRoom";

const Container = styled.div`
  width: 100%;
  height: 59rem;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 0.5rem;
  position: relative;
`;

const Top = styled.div`
  width: 15rem;
  padding: 1rem;
`;
const Category = styled.button`
  border: none;
  padding: 1rem;
  text-align: start;
  font-size: 1.6rem;
  border-radius: 90px;
  cursor: pointer;
  position: relative;
  width: 15rem;
  z-index: 997;
  background-color: white;
`;

const Menu = styled.nav<{ IsActive: boolean }>`
  ${({ IsActive }) => `
    opacity: ${IsActive ? 1 : 0};
    visibility:${IsActive ? "visible" : "hidden"};
    transform:${IsActive ? "translateY(-20px)" : "translateY(0)"};
`}
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: absolute;
  width: 23rem;
  border-radius: 8px;
  z-index: 999;
  margin: 2rem 0 0 1rem;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    text-decoration: none;
    color: ${GREY[700]};
    display: block;
    height: 100%;
    font-size: 1.4rem;
    &:nth-child(1) {
      border-bottom: 0.1rem solid ${GREY[300]};
      &:hover {
        background-color: ${GREY[100]};
        border-radius: 8px 8px 0 0;
      }
    }
    &:nth-child(2) {
      &:hover {
        background-color: ${GREY[100]};
        border-radius: 0 0 8px 8px;
      }
    }
  }
  button {
    width: 100%;
    padding: 1.5rem 1.2rem;
    cursor: pointer;
    border: none;
    text-align: start;
    background-color: transparent;
  }
`;

const Bottom = styled.div`
  width: 100%;
  height: 59rem;
  position: absolute;
  top: 0;
`;
export default function Message() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [currentTab, setCurrentTab] = useState("받은 메시지");
  const list = ["받은 메시지", "보낸 메시지"];
  const onClick = () => setIsActive(!isActive);

  return (
    <Container>
      <Top>
        <Category ref={dropdownRef} onClick={onClick}>
          {currentTab} <Icon className="arrowDown" />
        </Category>
        <Menu IsActive={isActive}>
          <ul>
            {list.map(item => {
              return (
                <li key={item}>
                  <button type="button" onClick={() => setCurrentTab(item)}>
                    {item}
                  </button>
                </li>
              );
            })}
          </ul>
        </Menu>
      </Top>
      <Line color={GREY[300]} width="100%" />
      <Bottom>
        {currentTab === "받은 메시지" ? <MessageRoom /> : <MessageRoom />}
      </Bottom>
    </Container>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../../constants/colors";

export type UserType = {
  name: string;
  job: string;
  starCount: number;
};

export type UserProps = {
  user: UserType;
};

const CardWrapper = styled.div`
  display: flex;
  width: 24.5rem;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Main = styled.button`
  background-color: ${GREY[400]};
  width: 100%;
  height: 16rem;
  border-radius: 0.5rem;
  border: none;
  text-align: center;
  font-weight: 600;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
  padding-top: 1.3rem;
  align-items: center;
`;

const UserPhoto = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  background-color: ${GREY[200]};
`;

const Name = styled.div`
  color: ${GREY[900]};
  font-weight: 700;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  &:hover {
    cursor: pointer;
  }
`;
const Job = styled.div`
  color: ${GREY[700]};
  font-weight: 700;
  font-size: 1.3rem;
  padding-left: 0.5rem;
`;

const StarCount = styled.div`
  position: absolute;
  right: 0;
  color: ${GREY[800]};
  font-weight: 500;
  font-size: 1.2rem;
`;

export default function PortfolidCard({ user }: UserProps) {
  return (
    <CardWrapper>
      <Main />
      <UserWrapper>
        <UserPhoto />
        <Name>{user.name}</Name>
        <Job>{user.job}</Job>
        <StarCount>{user.starCount}</StarCount>
      </UserWrapper>
    </CardWrapper>
  );
}

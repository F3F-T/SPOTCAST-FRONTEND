import React from "react";
import styled from "@emotion/styled";
import Button from "../../common/Button";
import { GREY } from "../../../constants/colors";

const Container = styled.div`
  width: 45rem;
  height: 70rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-size: 2.6rem;
  gap: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const Name = styled.div`
  font-weight: 700;
`;
const Role = styled.div`
  color: ${GREY[600]};
  font-weight: 700;
`;
const EgName = styled.div`
  font-weight: 700;
`;
const ProfileImg = styled.img`
  width: 100%;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 0.5rem;
  object-fit: cover;
`;
const InformButton = styled(Button)`
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.7rem;
`;

export default function Inform() {
  return (
    <Container>
      <Wrapper>
        <Name>정은비</Name>
        <Role>모델</Role>
      </Wrapper>
      <EgName>Jeong Eun Bie</EgName>
      <ProfileImg src="/images/img4.png" />
      <InformButton title="전체 포트폴리오 보기" buttonTheme="tertiary" />
    </Container>
  );
}

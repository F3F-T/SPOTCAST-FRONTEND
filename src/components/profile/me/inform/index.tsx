import React from "react";
import styled from "@emotion/styled";
import Button from "../../../common/Button";
import { GREY } from "../../../../constants/colors";
import { FormProps } from "../tab";
import { getUser } from "../../../../lib/utils";

const Container = styled.div`
  width: 45rem;
  height: 70rem;
  background-color: white;
  display: block;
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
  height: 5rem;
  margin-top: 1rem;
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
  width: 100%;
  margin-top: 1rem;
`;

export default function Inform({ openForm }: FormProps) {
  const { me } = getUser();
  return (
    <Container>
      <Wrapper>
        <Name>{me.name}</Name>
        <Role>{me.field?.split(",").join(" ∙ ")}</Role>
      </Wrapper>
      <EgName>{me.egName}</EgName>
      <ProfileImg src="/images/img4.png" />
      {openForm ? (
        <InformButton title="프로필 사진 수정" buttonTheme="tertiary" />
      ) : (
        <InformButton title="전체 포트폴리오 보기" buttonTheme="tertiary" />
      )}
    </Container>
  );
}

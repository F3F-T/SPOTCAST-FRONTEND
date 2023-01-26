import React from "react";
import styled from "@emotion/styled";
import Button from "../../../common/Button";
import { GREY } from "../../../../constants/colors";
import { FormProps } from "../tab";
import { getMe } from "../../../../util/lib";
import Following from "../../../bookmark/following";
import Follower from "../../../bookmark/follower";
import { FieldProps } from "../../../../interface/user";

const Container = styled.div`
  width: 29rem;
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
  width: 20rem;
  display: flex;
`;
const EgName = styled.div`
  font-weight: 700;
  height: 4rem;
  margin-top: 1rem;
`;
const ProfileImg = styled.img`
  width: 29rem;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 0.5rem;
  object-fit: cover;
`;
const InformButton = styled(Button)`
  padding: 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  margin-top: 1rem;
`;
const BookMarkBox = styled.div`
  width: 100%;
  height: 10rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

const Bookmarks = styled.div`
  display: flex;
  gap: 5rem;
  width: 100%;
`;
export default function Inform({ openForm }: FormProps) {
  const { me, field } = getMe();

  return (
    <Container>
      <Wrapper>
        <Name>{me.name}</Name>
        <Role>
          {field.constructor === Object &&
            Object.keys(field).length !== 0 &&
            field
              .filter((item: FieldProps) => item.exist === true)
              .map((item: FieldProps) => {
                return item.name;
              })
              .join(" ∙ ")}
        </Role>
      </Wrapper>
      <EgName>{me.egName}</EgName>
      <ProfileImg src={me.profile} />
      {openForm ? (
        <InformButton title="프로필 사진 수정" buttonTheme="tertiary" />
      ) : (
        <>
          <InformButton title="전체 포트폴리오 보기" buttonTheme="tertiary" />
          <BookMarkBox>
            <div>활동 정보</div>
            <Bookmarks>
              <Following />
              <Follower />
            </Bookmarks>
          </BookMarkBox>
        </>
      )}
    </Container>
  );
}

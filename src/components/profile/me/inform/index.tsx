/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../../../common/Button";
import { GREY } from "../../../../constants/colors";
import { FormProps } from "../tab";
import { getMe } from "../../../../util/lib";
import Following from "../../../bookmark/following";
import Follower from "../../../bookmark/follower";
import { FieldProps } from "../../../../interface/user";
import useImage from "../../../../hooks/useImage";

export default function Inform({ openForm }: FormProps) {
  const { me } = getMe();
  const { onChangeImg, onChangeImgDefault } = useImage();
  const [imgModalOpen, setImgModalOpen] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Name>{me.name}</Name>
        <Role>
          {me.field &&
            me.field
              .filter((item: FieldProps) => item.exist === true)
              .map((item: FieldProps) => {
                return item.name;
              })
              .join(" ∙ ")}
        </Role>
      </Wrapper>
      <EgName>{me.egName}</EgName>
      <ImgWrapper>
        {!openForm && (
          <ImgEditButton
            onClick={() => {
              setImgModalOpen(!imgModalOpen);
            }}
          >
            +
          </ImgEditButton>
        )}
        <ProfileImg src={me.profile} />
        {imgModalOpen && (
          <ProfileModal>
            <form method="post" encType="multipart/form-data">
              <label htmlFor="chooseFile">
                <UploadButton>프로필 사진 수정 </UploadButton>
              </label>
              <ImgInput
                type="file"
                id="chooseFile"
                name="chooseFile"
                accept="image/*"
                onChange={onChangeImg}
              />
            </form>
            <SelectButton
              onClick={() => {
                onChangeImgDefault();
              }}
            >
              기본 프로필로 변경
            </SelectButton>
          </ProfileModal>
        )}
      </ImgWrapper>

      {!openForm && (
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
  max-height: 38rem;
  margin-top: 1rem;
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

const ImgInput = styled.input`
  visibility: hidden;
`;

const ImgWrapper = styled.div`
  width: 30.5rem;
  position: relative;
`;

const ImgEditButton = styled.button`
  position: absolute;
  right: 0;
  background-color: white;
  z-index: 999;
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid ${GREY[400]};
  border-radius: 300rem;
  color: ${GREY[500]};
  font-size: 3rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-weight: 300;
  cursor: pointer;
`;

const ProfileModal = styled.div`
  width: 17rem;
  height: 10rem;
  z-index: 2;
  background-color: white;
  border-radius: 0.5rem;
  border: 0.1rem solid ${GREY[200]};
  position: absolute;
  top: 0;
  left: 29rem;
  display: flex;
  margin-top: 0.8rem;
  flex-direction: column;
  padding-top: 1.5rem;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
`;

const UploadButton = styled.div`
  font-size: 1.3rem;
  border: none;
  display: flex;
  margin-left: 2rem;
  text-align: start;
  margin-top: 0.5rem;
  cursor: pointer;
  color: ${GREY[700]};
  &:hover {
    font-weight: 700;
  }
`;

const SelectButton = styled.button`
  font-size: 1.3rem;
  border: none;
  margin-left: 2rem;
  text-align: start;
  padding: 0;
  cursor: pointer;
  color: ${GREY[700]};
  background-color: white;
  &:hover {
    font-weight: 700;
  }
`;

import styled from "@emotion/styled";
import React from "react";
import useSWR from "swr";
import { GREY } from "../../../constants/colors";
import { getMe } from "../../../util/lib";
import ApplyButton from "./applyButton";
import { loadBoardPost } from "../../../api/board";
import swrKeys from "../../../constants/swrKeys";

export default function Post({ postId }: { postId: number }) {
  const { me } = getMe();
  const { data } = useSWR(swrKeys.loadBoardPostKey, () =>
    loadBoardPost(postId),
  );

  if (!data) return null;

  const dataMap = [
    { name: "주최사", contents: data.production },
    { name: "모집 형식", contents: data.recruitType },
    { name: "모집 마감", contents: data.regDate.split("T")[0] },
    { name: "모집 분야", contents: data.category.name },
    { name: "이메일", contents: data.supportEmail },
  ];

  console.log(data);
  return (
    <Container>
      <Wrapper>
        <ButtonWrapper>
          <ApplyButton />
        </ButtonWrapper>
        <Img src={me.profile} />
        <div>
          <Title>{data.title}</Title>
          <ContentsContainer>
            {dataMap.map(ele => {
              return (
                <ContentsWrapper key={ele.name}>
                  <Name>{ele.name}</Name>
                  <Contents>{ele.contents}</Contents>
                </ContentsWrapper>
              );
            })}
          </ContentsContainer>
        </div>
      </Wrapper>
      <Detail>상세 내용</Detail>
      <DetailContents>{data.content}</DetailContents>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  padding-top: 1.5rem;
  flex-direction: column;
`;

const Img = styled.img`
  width: 22rem;
  height: 30rem;
  object-fit: cover;
`;
const Wrapper = styled.div`
  display: flex;
  width: 108rem;
  gap: 5.5rem;
  padding-bottom: 3rem;
  position: relative;
`;
const Title = styled.div`
  font-size: 2.3rem;
  padding-top: 0.5rem;
  font-weight: 700;
`;

const ContentsContainer = styled.div`
  width: 43rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
`;
const ContentsWrapper = styled.div`
  width: 52rem;
  height: 3rem;
  margin-top: 1.5rem;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${GREY[300]};
`;

const Name = styled.div`
  font-size: 1.5rem;
  color: ${GREY[600]};
  text-align: start;
  padding-right: 3rem;
`;

const Contents = styled.div`
  font-size: 1.5rem;
  color: ${GREY[800]};
`;
const Detail = styled.div`
  width: 100%;
  height: 3rem;
  margin-top: 1.5rem;
  padding-bottom: 1rem;
  font-size: 1.6rem;
  color: ${GREY[600]};
  text-align: start;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${GREY[300]};
`;

const DetailContents = styled.div`
  font-size: 1.5rem;
  padding-top: 3rem;
  white-space: pre-wrap;
  line-height: 1.75;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
`;

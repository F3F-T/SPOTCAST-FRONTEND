import styled from "@emotion/styled";
import React from "react";
import Badge from "../../common/Badge";
import { GREY, INDIGO } from "../../../constants/colors";
import text from "./text";
import Icon from "../../common/Icon";

export default function Post() {
  const fakeDate = [
    { name: "제작", contents: "이방인들" },
    { name: "모집 인원", contents: "3명" },
    { name: "모집 분야", contents: "영화" },
    { name: "모집 마감", contents: "2023-03-14" },
    { name: "참여 기간", contents: "3개월 이상" },
    { name: "전화번호", contents: "" },
    { name: "페이", contents: "없음" },
    { name: "이메일", contents: "nu8545@naver.com" },
  ];
  return (
    <Container>
      <Top>
        <Wrapper>
          <Date>0일 남음</Date>
          <Category>영화</Category>
        </Wrapper>
        <Title>
          상업적인 장편영화 시나리오 스터디 팀원 모집 (아이템 개발, 공모전 준비)
        </Title>
        <StyledBadge label="비수익성(포트폴리오)" />
        <BookmarkButton>
          <Icon className="bookmarkEmpty" border={0.1} color={INDIGO} />
          북마크 하기
        </BookmarkButton>
      </Top>
      <ContentsContainer>
        {fakeDate.map(ele => {
          return (
            <ContentsWrapper key={ele.name}>
              <Name>{ele.name}</Name>
              <Contents>{ele.contents}</Contents>
            </ContentsWrapper>
          );
        })}
      </ContentsContainer>
      <Detail> 상세 내용</Detail>
      <DetailContents>{text}</DetailContents>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const Title = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
`;
const StyledBadge = styled(Badge)`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  padding: 1rem 1rem;
`;
const Date = styled.span`
  width: 7.5rem;
  height: 2.7rem;
  display: flex;
  font-size: 1.2rem;
  border-radius: 1.3rem;
  justify-content: center;
  align-items: center;
  background-color: #ffed86;
`;

const Category = styled.span`
  width: 6rem;
  height: 3rem;
  display: flex;
  font-size: 1.3rem;
  align-items: center;
  color: ${GREY[700]};
`;

const ContentsContainer = styled.div`
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
  font-size: 1.5rem;
  color: ${GREY[600]};
  text-align: start;
  padding-right: 3rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${GREY[300]};
`;

const DetailContents = styled.div`
  font-size: 1.4rem;
  padding-top: 3rem;
  white-space: pre-wrap;
  line-height: 1.5;
`;

const BookmarkButton = styled.button`
  background-color: white;
  border: 0.1rem solid ${INDIGO};
  color: ${INDIGO};
  border-radius: 0.5rem;
  display: flex;
  gap: 1rem;
  position: absolute;
  right: 0;
  padding: 1.3rem 2.7rem;
  cursor: pointer;
`;

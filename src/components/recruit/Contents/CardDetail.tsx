import styled from "@emotion/styled";
import React from "react";
import { GREY, INDIGO } from "../../../constants/colors";
import Icon from "../../common/Icon";
import IconButton from "../../common/IconButton";

export default function CardDetail() {
  return (
    <Container>
      <Top>
        <Badge>2일 남음</Badge>
        <Category>영화</Category>
        <IconWrapper>
          <IconButton IconName="heartEmpty" size="1.8rem" border={0.2} />
          <IconButton IconName="bookmarkEmpty" size="1.8rem" border={0.2} />
        </IconWrapper>
      </Top>
      <Middle>
        <Title>{`단편영화 <이별 이야기(가제)>에서 작곡가/음악감독님을 구인합니다!`}</Title>
        <EyeWrapper>
          <Icon className="eye" size="1.5rem" color={GREY[400]} border={0.2} />
          <Eye>221</Eye>
        </EyeWrapper>
      </Middle>
      <Bottom>
        <Img />
        <Name>강준우</Name>
        <Date>23.02.02까지</Date>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  width: 60rem;
  border-right: 0.1rem solid ${INDIGO};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Top = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  position: relative;
  align-items: center;
`;
const Middle = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  position: relative;
`;

const Badge = styled.div`
  width: 7.5rem;
  height: 2.7rem;
  display: flex;
  font-size: 1.2rem;
  border-radius: 1.3rem;
  justify-content: center;
  align-items: center;
  background-color: #ffed86;
  margin-left: 2rem;
`;

const Category = styled.div`
  width: 6rem;
  height: 3rem;
  display: flex;
  font-size: 1.2rem;
  margin-left: 1.5rem;
  align-items: center;
  color: ${GREY[700]};
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0;
  padding-right: 2rem;
`;

const Title = styled.div`
  font-size: 1.7rem;
  margin-left: 2rem;
  font-weight: 700;
`;

const Eye = styled.div`
  color: ${GREY[400]};
  font-size: 1.2rem;
`;

const EyeWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  padding: 0 2rem 0.4rem 0;
  bottom: 0;
  gap: 0.2rem;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  border-top: 0.1rem solid ${GREY[400]};
`;

const Img = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${GREY[400]};
  border-radius: 10rem;
  margin-left: 2rem;
`;
const Name = styled.div`
  font-size: 1.2rem;
  color: ${GREY[500]};
  padding-left: 0.5rem;
`;
const Date = styled.div`
  font-size: 1.2rem;
  color: ${GREY[600]};
  padding-left: 1rem;
`;

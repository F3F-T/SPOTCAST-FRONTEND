import React from "react";
import styled from "@emotion/styled";
import { GREY, INDIGO, WHITE } from "../../../constants/colors";
import Icon from "../../common/Icon";

export default function ApplyButton() {
  return (
    <Container>
      <Title>
        마감일까지<span> 16일 </span>남았어요!
      </Title>
      <div>
        <IconWrapper>
          <Icon className="eye" size="0.2" border={0.1} color={GREY[400]} />
          13583
        </IconWrapper>
        <IconWrapper>
          <Icon
            className="heartEmpty"
            size="0.2"
            border={0.1}
            color={GREY[400]}
          />{" "}
          821
        </IconWrapper>
      </div>

      <BookmarkButton>
        <Icon className="bookmarkEmpty" border={0.7} color={INDIGO} />
        북마크 하기
      </BookmarkButton>
      <Apply>지원하기</Apply>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  border: 0.1rem solid ${GREY[400]};
  width: 29rem;
  height: 22rem;
  border-radius: 0.5rem;
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  justify-content: center;
  padding: 1.3rem 1.5rem;
  div {
    display: flex;
  }
  button {
    cursor: pointer;
  }
`;

const Title = styled.div`
  font-size: 1.6rem;
  white-space: pre-wrap;
  span {
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  border: 0.1rem solid ${GREY[400]};
  width: 7rem;
  padding: 0.5rem 0;
  justify-content: center;
  gap: 0.7rem;
  align-items: center;
  border-radius: 20rem;
  font-size: 1.1rem;
  display: flex;
  color: ${GREY[500]};
  margin-right: 0.3rem;
`;
const BookmarkButton = styled.button`
  font-size: 1.4rem;
  border: 0.1rem solid ${INDIGO};
  border-radius: 20rem;
  background-color: white;
  display: flex;
  gap: 1rem;
  justify-content: center;
  color: ${INDIGO};
  padding: 1.2rem 2.3rem;
`;

const Apply = styled.button`
  font-size: 1.4rem;
  border: 0.1rem solid ${INDIGO};
  border-radius: 20rem;
  background-color: ${INDIGO};
  display: flex;
  gap: 1rem;
  justify-content: center;
  color: ${WHITE};
  padding: 1.2rem 2.3rem;
`;

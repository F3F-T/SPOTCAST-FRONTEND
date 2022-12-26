import React from "react";
import styled from "@emotion/styled";
import Line from "../../../common/Line";
import { GREY } from "../../../../constants/colors";

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 5rem;
  margin-bottom: 2.2rem;
  display: flex;
  flex-direction: column;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const UserWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  padding-left: 1.4rem;
`;

const UserPhoto = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 2rem;
  background-color: ${GREY[400]};
`;

const Id = styled.div`
  color: ${GREY[900]};
  padding-left: 0.7rem;
`;
const Time = styled.div`
  color: ${GREY[600]};
  padding-left: 2.7rem;
`;
const PostInform = styled.div`
  color: ${GREY[400]};
  position: absolute;
  right: 0;
  font-weight: 400;
`;

const Content = styled.div`
  padding: 0.5rem 0 1.2rem 0;
  font-size: 1.5rem;
  padding-left: 1.4rem;
`;

interface PostProps {
  id: string;
  time: number;
  views: number;
  comments: number;
  content: string;
}

interface PostTypes {
  post: PostProps;
}

export default function PreviewCard({ post }: PostTypes) {
  return (
    <Container>
      <UserWrapper>
        <UserPhoto />
        <Id>{post.id}</Id>
        <Time>{post.time}분전</Time>
        <PostInform>
          {post.views} {post.comments}
        </PostInform>
      </UserWrapper>
      <Content>{post.content}</Content>
      <Line width="100%" color={GREY[300]} />
    </Container>
  );
}

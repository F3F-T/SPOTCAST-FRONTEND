import React from "react";
import styled from "@emotion/styled";
import Badge from "../common/Badge";
import Icon from "../common/Icon";
import { MUSTARD, GREY, BLACK } from "../../constants/colors";

type BadgeType = "profit" | "none-profit";

interface CrewCardProps {
  badge: BadgeType;
  duration: number;
  content: string;
  views: number;
  bookmarks: number; //남들이 스크랩 한 수
  bookmarked: boolean; //내가 스크랩 했는지 아닌지
}

const CrewCard = ({
  badge,
  duration,
  content,
  views,
  bookmarks,
  bookmarked,
}: CrewCardProps) => {
  const ContainerWrapper = styled.div<{}>`
    display: flex;
    flex-direction: column;
    width: 19.5rem;
    .info {
      padding: 2.5rem 1.4rem;
      background-color: ${GREY[100]};
      border-radius: 0.5rem;
      .content {
        color: ${BLACK};
        font-size: 1.5rem; //p tag 기본 마진 없애기 (css reset)
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        min-height: 9.2rem;
      }
      .duration {
        color: ${GREY[600]};
        font-size: 1.3rem;
        .number {
          font-weight: bold;
          margin-left: 0.8rem;
        }
      }
    }
    .stats {
      font-size: 1.5rem;
      color: ${GREY[600]};
      align-self: flex-end;
      margin-top: 0.8rem;
      display: flex;
      gap: 1rem;
      margin-right: 1rem;
      i {
        margin-right: 0.4rem;
      }
    }
  `;

  return (
    <ContainerWrapper>
      <div className="info">
        <p className="content">{content}</p>
        <p className="duration">
          <span>모집 마감일</span>
          <span className="number">
            {duration === 0 ? "없음" : "D-" + duration}
          </span>
        </p>
        {badge === "profit" ? (
          <Badge variant="mustard" size="medium" label="수익성" />
        ) : (
          <Badge variant="indigo" size="medium" label="비수익성" />
        )}
      </div>
      <div className="stats">
        <span>
          <Icon className="eye" />
          {views}
        </span>
        <span>
          {bookmarked ? (
            <Icon className="bookmarkFill" color={MUSTARD} />
          ) : (
            <Icon className="bookmarkEmpty" />
          )}
          {bookmarks}
        </span>
      </div>
    </ContainerWrapper>
  );
};

export default CrewCard;

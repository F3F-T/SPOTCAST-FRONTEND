/* eslint-disable react/no-unused-prop-types */
import React from "react";
import Icon from "../../../../common/Icon";
import {
  Wrapper,
  Info,
  CrewPost,
  Content,
  Duration,
  Number,
  Stats,
  ProfitBadge,
} from "./index.styles";
import { MUSTARD } from "../../../../../constants/colors";

function CrewCard({
  profitable,
  duration,
  content,
  views,
  bookmarks,
  bookmarked,
}: CrewPost) {
  return (
    <Wrapper>
      <Info>
        <Content>{content}</Content>
        <Duration>
          <span>모집 마감일</span>
          <Number>{duration === 0 ? "없음" : `D-${duration}`}</Number>
        </Duration>
        {profitable ? (
          <ProfitBadge variant="mustard" size="medium" label="수익성" />
        ) : (
          <ProfitBadge variant="indigo" size="medium" label="비수익성" />
        )}
      </Info>
      <Stats>
        <span>
          <Icon className="eye" border={0.5} />
          {views}
        </span>
        <span>
          {bookmarked ? (
            <Icon className="bookmarkFill" color={MUSTARD} border={0.3} />
          ) : (
            <Icon className="bookmarkEmpty" border={0.3} />
          )}
          {bookmarks}
        </span>
      </Stats>
    </Wrapper>
  );
}

export default CrewCard;

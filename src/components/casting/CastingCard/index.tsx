/* eslint-disable @next/next/no-img-element */
import React from "react";
import Icon from "../../common/Icon";
import {
  CardContainer,
  BookmartButton,
  ImageContainer,
  Title,
  Subtitle,
  EndDate,
  Date,
  Remainder,
} from "./index.styles";

interface CastingProps {
  thumbImg: string;
  postUrl: string;
  companyUrl: string;
  title: string;
  subtitle: string;
  endDate: string;
  remaining: number;
}

function CastingCard({
  thumbImg = "https://via.placeholder.com/300?text=casting",
  postUrl = "/",
  companyUrl = "/company/YG",
  title = "2023 YG NATIONAL AUDITION TOUR",
  subtitle = "YG Entertainment",
  endDate = "2023-02-11",
  remaining = 14,
}: CastingProps) {
  return (
    <CardContainer>
      <BookmartButton type="button">
        <Icon className="bookmarkFill" color="#FFF" border={0} />
        {/* 이거 어케하실건가요? */}
      </BookmartButton>
      <ImageContainer>
        <img className="unselectable" src={thumbImg} alt="alt" />
      </ImageContainer>
      <Title href={postUrl}>{title}</Title>
      <Subtitle href={companyUrl}>{subtitle}</Subtitle>
      <EndDate>
        <Date>
          <span>{endDate}</span> 마감
        </Date>
        <Remainder>
          D-<span>{remaining}</span>
        </Remainder>
      </EndDate>
    </CardContainer>
  );
}

export default CastingCard;

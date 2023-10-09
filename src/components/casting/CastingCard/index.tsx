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
import useCasting from "../../../hooks/useCasting";
import { IBoard } from "../../../interface/borad";
import { getRemainDay } from "../../../util/date";

function CastingCard({ info }: { info: IBoard }) {
  const { replacePostPage } = useCasting();
  return (
    <CardContainer
      onClick={() => {
        replacePostPage(info.id);
      }}
    >
      <BookmartButton type="button">
        <Icon className="bookmarkFill" color="#FFF" border={0} />
      </BookmartButton>
      <ImageContainer>
        <img
          className="unselectable"
          src="https://via.placeholder.com/300?text=casting"
          alt="alt"
        />
      </ImageContainer>
      <Title>{info.title}</Title>
      <Subtitle>{info.production}</Subtitle>
      <EndDate>
        <Date>
          <span>{info.regDate.split("T")[0]}</span> 마감
        </Date>
        <Remainder>
          {getRemainDay(info.regDate) < 0
            ? "마감"
            : `D-${getRemainDay(info.regDate)}`}
        </Remainder>
      </EndDate>
    </CardContainer>
  );
}

export default CastingCard;

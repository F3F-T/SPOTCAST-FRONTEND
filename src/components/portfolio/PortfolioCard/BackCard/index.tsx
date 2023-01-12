/* eslint-disable @next/next/no-img-element */
import React from "react";
import { MUSTARD } from "../../../../constants/colors";
import Icon from "../../../common/Icon";
import {
  CardContainer,
  Link,
  LinkContainer,
  StarContainer,
  StarButton,
  StarCount,
  Subtitle,
  Tag,
  Title,
  TitleContainer,
  PrevGrid,
  PrevImageContainer,
} from "./index.styles";

interface BackProps {
  title: string;
  tags: string[];
  prevUrls: string[];
  profileUrl: string;
  portfolioUrl: string;
  isStarred: boolean;
  starred: number;
}

function BackCard({
  title,
  tags,
  prevUrls,
  profileUrl,
  portfolioUrl,
  isStarred,
  starred,
}: BackProps) {
  const handleStarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // 즐겨찾기 POST
  };
  return (
    <CardContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Subtitle>
          {tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </Subtitle>
        <StarContainer>
          <StarButton type="button" onClick={handleStarClick}>
            <Icon
              className={isStarred ? "starFill" : "starEmpty"}
              color={MUSTARD}
              size="2rem"
            />
          </StarButton>
          <StarCount>{starred}</StarCount>
        </StarContainer>
      </TitleContainer>
      <PrevGrid length={prevUrls.length}>
        {prevUrls.map((url, index) => (
          <PrevImageContainer className={(index + 1).toString()}>
            <img src={url} alt="d" />
          </PrevImageContainer>
        ))}
      </PrevGrid>
      <LinkContainer>
        <Link href={profileUrl}>Profile</Link>
        <Link href={portfolioUrl}>Porfolio</Link>
      </LinkContainer>
    </CardContainer>
  );
}

export default BackCard;

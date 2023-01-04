import React from "react";
import { MUSTARD } from "../../../../constants/colors";
import Icon from "../../../common/Icon";
import {
  CardContainer,
  Link,
  LinkContainer,
  ProfileImage,
  StarContainer,
  StarButton,
  StarCount,
  Subtitle,
  Tag,
  Title,
} from "./index.styles";

interface FrontProps {
  title: string;
  tags: string[];
  imageUrl: string;
  profileUrl: string;
  portfolioUrl: string;
  isStarred: boolean;
  starred: number;
}

function FrontCard({
  title,
  tags,
  imageUrl,
  profileUrl,
  portfolioUrl,
  isStarred,
  starred,
}: FrontProps) {
  const handleStarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // 즐겨찾기 POST
  };
  return (
    <CardContainer>
      <StarContainer>
        <StarButton type="button" onClick={handleStarClick}>
          <Icon
            className={isStarred ? "starFill" : "starEmpty"}
            color={MUSTARD}
            size="2.5rem"
          />
        </StarButton>
        <StarCount>{starred}</StarCount>
      </StarContainer>
      <ProfileImage src={imageUrl} />
      <Title>{title}</Title>
      <Subtitle>
        {tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </Subtitle>
      <LinkContainer>
        <Link href={profileUrl}>Profile</Link>
        <Link href={portfolioUrl}>Porfolio</Link>
      </LinkContainer>
    </CardContainer>
  );
}

export default FrontCard;

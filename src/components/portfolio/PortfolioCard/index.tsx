"use client";

import React from "react";
import FlippableCard from "../../common/FlippableCard";
import BackCard from "./BackCard/index";
import FrontCard from "./FrontCard";

export interface PortfolioProps {
  title: string;
  tags: string[];
  imageUrl: string;
  prevUrls: string[];
  profileUrl: string;
  portfolioUrl: string;
  isStarred: boolean;
  starred: number;
}

function PortfolioCard({
  title,
  tags,
  imageUrl,
  prevUrls,
  profileUrl,
  portfolioUrl,
  isStarred,
  starred,
}: PortfolioProps) {
  return (
    <div>
      <FlippableCard
        frontCard={
          <FrontCard
            title={title}
            tags={tags}
            imageUrl={imageUrl}
            profileUrl={profileUrl}
            portfolioUrl={portfolioUrl}
            isStarred={isStarred}
            starred={starred}
          />
        }
        backCard={
          <BackCard
            title={title}
            tags={tags}
            prevUrls={prevUrls}
            profileUrl={profileUrl}
            portfolioUrl={portfolioUrl}
            isStarred={isStarred}
            starred={starred}
          />
        }
        width="25rem"
        height="37.7rem"
      />
    </div>
  );
}

export default PortfolioCard;

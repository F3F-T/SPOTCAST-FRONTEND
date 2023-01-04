"use client";

import React from "react";
import FlippableCard from "../../common/FlippableCard";
import BackCard from "./BackCard/index";
import FrontCard from "./FrontCard";

interface PortfolioProps {
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
  title = "윤채현",
  tags = ["연출", "실용음악"],
  imageUrl = "https://via.placeholder.com/300?text=PROFILE",
  prevUrls = [
    "https://via.placeholder.com/300x100?text=1",
    "https://via.placeholder.com/200x400?text=2",
    "https://via.placeholder.com/300x700?text=3",
    "https://via.placeholder.com/300?text=4",
  ],
  profileUrl = "/profile",
  portfolioUrl = "/portfolio",
  isStarred = true,
  starred = 123,
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
        width="30.7rem"
        height="47.3rem"
      />
    </div>
  );
}

export default PortfolioCard;

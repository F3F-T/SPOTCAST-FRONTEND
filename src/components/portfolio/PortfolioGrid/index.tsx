"use client";

import React from "react";
import PortfolioCard, { PortfolioProps } from "../PortfolioCard/index";
import GridContainer from "./index.styles";

interface PortfolioGridProps {
  porfolios: PortfolioProps[];
}

function PortfolioGrid({ porfolios }: PortfolioGridProps) {
  return (
    <GridContainer>
      {porfolios &&
        porfolios.map(portfolio => (
          <PortfolioCard
            key={portfolio.profileUrl}
            title={portfolio.title}
            tags={portfolio.tags}
            imageUrl={portfolio.imageUrl}
            prevUrls={portfolio.prevUrls}
            profileUrl={portfolio.profileUrl}
            portfolioUrl={portfolio.portfolioUrl}
            isStarred={portfolio.isStarred}
            starred={portfolio.starred}
          />
        ))}
    </GridContainer>
  );
}

export default PortfolioGrid;
/* 아니 일단 니가 해야하는 일이 뭔데 정리를 해봐
1. 공개 포트폴리오 데이터를 불러온다 (카테고리 쿼리스트링 걸어서)
2. 핫 포트폴리오 데이터를 불러온다
3. 필터링해서 서치할 수 있는 서치바
4. 보여줘야할 데이터를 그리드 형식으로 보여준다
*/

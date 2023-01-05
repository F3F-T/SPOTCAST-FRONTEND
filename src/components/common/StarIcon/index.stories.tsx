import React from "react";
import StarIcon from ".";

export default {
  title: "components/starIcon", // 스토리북에서 보여질 그룹과 경로를 명시
  component: StarIcon, // 어떤 컴포넌트를 문서화 할지 명시
};

export const starIcon = () => <StarIcon border={0.2} size="2rem" />;

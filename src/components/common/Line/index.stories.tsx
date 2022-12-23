import React from "react";
import Line from ".";
import { GREY } from "../../../constants/colors";

export default {
  title: "components/Line", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Line, // 어떤 컴포넌트를 문서화 할지 명시
};

export const line1 = () => <Line width="100%" color={GREY[900]} />;

export const line2 = () => <Line width="68%" color={GREY[200]} />;

import React from "react";
import Button from ".";

export default {
  title: "components/Button", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
};

export const primary = () => <Button title="basic navy" theme="primary" />;

export const secondary = () => (
  <Button title="basic mustard" theme="secondary" />
);

export const text = () => <Button title="basic text" theme="tertiary" />;
export const btnEx1 = () => (
  <Button title="LARGE" theme="primary" size="large" />
);
export const btnEx2 = () => (
  <Button title="MEDIUM" theme="tertiary" size="medium" />
);
export const btnEx3 = () => (
  <Button title="SMALL" theme="secondary" size="small" />
);
export const btnEx4 = () => (
  <Button title="CUSTOM WIDTH" theme="primary" width="20rem" />
);
export const btnEx5 = () => (
  <Button title="FULL WIDTH" theme="primary" width="100%" />
);

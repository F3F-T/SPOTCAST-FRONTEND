import React from "react";
import Button from ".";

export default {
  title: "components/Button", // 스토리북에서 보여질 그룹과 경로를 명시
  component: Button, // 어떤 컴포넌트를 문서화 할지 명시
};

export const primary = () => (
  <Button title="basic navy" buttonTheme="primary" />
);

export const secondary = () => (
  <Button title="basic mustard" buttonTheme="secondary" />
);

export const text = () => <Button title="basic text" buttonTheme="tertiary" />;
export const btnEx1 = () => (
  <Button title="LARGE" buttonTheme="primary" size="large" />
);
export const btnEx2 = () => (
  <Button title="MEDIUM" buttonTheme="tertiary" size="medium" />
);
export const btnEx3 = () => (
  <Button title="SMALL" buttonTheme="secondary" size="small" />
);
export const btnEx4 = () => (
  <Button title="CUSTOM WIDTH" buttonTheme="primary" width="20rem" />
);
export const btnEx5 = () => (
  <Button title="FULL WIDTH" buttonTheme="primary" width="100%" />
);
export const disabled = () => <Button title="disabled" disabled />;

import React from "react";
import styled from "@emotion/styled";
import Icon from "./Icon";

type AnchorSize = "large" | "medium" | "small";

interface AnchorProps {
  href: string;
  icon?: string;
  size?: AnchorSize;
  label: string;
}

const LabeledAnchor = ({ href, size = "medium", label, icon }: AnchorProps) => {
  const AnchorWrapper = styled.a<{ size: AnchorSize }>`
    ${() => `
    font-size: ${{ large: "2.7rem", medium: "2.3rem", small: "1.5rem" }[size]};
    font-weight: bold;
    display: flex;
    gap: 0.8rem;
    width: fit-content;
  `}
  `;

  return (
    <AnchorWrapper href={href} size={size}>
      <span>{label}</span>
      {icon && <Icon className={icon} />}
    </AnchorWrapper>
  );
};

export default LabeledAnchor;

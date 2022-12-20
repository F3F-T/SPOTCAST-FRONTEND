import React from "react";
import styled from "@emotion/styled";

type AnchorSize = "large" | "medium" | "small";

interface AnchorProps {
  href: string;
  size?: AnchorSize;
  label: string;
}

const LabeledAnchor = ({ href, size = "medium", label }: AnchorProps) => {
  const AnchorWrapper = styled.a<{ size: AnchorSize }>`
    ${() => `
    font-size: ${{ large: "2.7rem", medium: "2.3rem", small: "1.5rem" }[size]};
    font-weight: bold;
  `}
  `;

  return (
    <AnchorWrapper href={href} size={size}>
      <span>{label}</span>
    </AnchorWrapper>
  );
};

export default LabeledAnchor;

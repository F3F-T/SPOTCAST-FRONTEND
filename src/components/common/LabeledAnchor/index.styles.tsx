import styled from "@emotion/styled";

type AnchorSize = "large" | "medium" | "small";

export interface AnchorProps {
  href: string;
  icon?: string;
  size?: AnchorSize;
  label: string;
}

export const AnchorWrapper = styled.a<{ size: AnchorSize }>`
  ${({ size }) => `
font-size: ${{ large: "2.7rem", medium: "2.3rem", small: "1.5rem" }[size]};
font-weight: bold;
display: flex;
gap: 0.8rem;
width: fit-content;
`}
`;

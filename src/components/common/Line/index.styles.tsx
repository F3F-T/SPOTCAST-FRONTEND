import styled from "@emotion/styled";

export type LineProps = {
  className?: string;
  // 선 색상
  color: string;
  // 선 너비
  width: string;
};

const StyledLine = styled.div<{
  color: string;
  width: string;
}>`
  ${({ color, width }) => `
    border-bottom: 0.1rem solid ${color};
    width: ${width};
`}
  margin: 0 auto;
  display: block;
`;

export { StyledLine };

import React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function FullContainer({ children, className }: Props) {
  const Wrapper = styled.div`
    max-width: 100%;
  `;
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default FullContainer;

import React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function InnerContainer({ children, className }: Props) {
  const Wrapper = styled.div`
    max-width: 108rem;
  `;
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default InnerContainer;

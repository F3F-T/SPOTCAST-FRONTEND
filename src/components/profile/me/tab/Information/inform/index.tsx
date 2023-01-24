import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../../../../../constants/colors";
import getUser from "../../../../../../lib/utils";

const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Title = styled.div`
  font-weight: 700;
  color: ${GREY[600]};
  padding-bottom: 1rem;
`;

const Contents = styled.div``;
export default function Introduce() {
  const { me } = getUser();

  const fakeList = [
    {
      title: "작업 분야",
      contents: me.field,
    },
    // {
    //   title: "회사",
    //   contents: "Model directors",
    // },
    // {
    //   title: "아카이브",
    //   contents: `Model of the Year (Nominations)
    //   2017 Breakout Star (Nominee)`,
    // },
  ];
  return (
    <Container>
      {me.information}
      {fakeList.map(item => {
        return (
          <div key={item.title}>
            <Title>{item.title}</Title>
            <Contents>{item.contents}</Contents>
          </div>
        );
      })}
    </Container>
  );
}

import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../../../constants/colors";
import { getUser } from "../../../../util/lib";
import { FieldProps } from "../../../../interface/user";

const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  line-height: 1.5;
`;

const Title = styled.div`
  font-weight: 700;
  color: ${GREY[600]};
  padding-bottom: 1rem;
`;

const Contents = styled.div``;
export default function Introduce() {
  const { user } = getUser();

  const fakeList = [
    {
      title: "작업 분야",
      contents:
        user.field &&
        user.field
          .filter((item: FieldProps) => {
            return item.exist === true;
          })
          .map((item: FieldProps) => {
            return item.name;
          })
          .join(" ∙ "),
    },
  ];
  return (
    <Container>
      <div>
        {user?.information?.split("\n").map((line: string) => {
          return (
            <>
              <span>{line}</span>
              <br />
            </>
          );
        })}
      </div>
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

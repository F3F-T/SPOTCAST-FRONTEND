import styled from "@emotion/styled";
import React from "react";
import { GREY } from "../../../constants/colors";
import Badge from "../../common/Badge";
import { PROFITABLE_STATUS } from "../../../constants/boardType";
import { IBoard } from "../../../interface/borad";

const Container = styled.div`
  width: 27rem;
  padding: 2rem;
  background-color: #f4f4fd;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
  font-size: 1.3rem;
`;
const Category = styled.div`
  color: ${GREY[500]};
`;

const Content = styled.div`
  color: ${GREY[800]};
`;

const StyledBadge = styled(Badge)`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;
export default function CardCategory({ info }: { info: IBoard }) {
  const Categories = ["제작", "분야"];
  const Contents = [info.production, info.recruitType];
  return (
    <Container>
      <StyledBadge
        label={
          info.profitStatus === PROFITABLE_STATUS.PROFITABLE
            ? "수익성"
            : "비수익성(포트폴리오)"
        }
        variant="indigo"
      />
      {Categories.map((ele, idx) => {
        return (
          <Wrapper>
            <Category>{ele}</Category>
            <Content>{Contents[idx]}</Content>
          </Wrapper>
        );
      })}
    </Container>
  );
}

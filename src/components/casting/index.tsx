import React from "react";
import Pagination from "react-js-pagination";
import CastingCard from "./CastingCard";
import { CardGrid, Paging, Container } from "./index.styles";
import CastingNav from "./Nav";
import { IBoard } from "../../interface/borad";
import Icon from "../common/Icon";
import useCasting from "../../hooks/useCasting";

export default function Casting() {
  const { data, currentPage, onChangePage } = useCasting();
  if (!data) return null;

  return (
    <>
      <CastingNav />
      <Container>
        <CardGrid>
          {data.data.content.map((info: IBoard) => (
            <CastingCard info={info} />
          ))}
        </CardGrid>
        <Paging>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={12}
            totalItemsCount={data.data.totalElements}
            pageRangeDisplayed={5}
            prevPageText={<Icon className="arrowLeft" size="1.2rem" />}
            nextPageText={<Icon className="arrowRight" size="1.2rem" />}
            hideFirstLastPages
            onChange={onChangePage}
          />
        </Paging>
      </Container>
    </>
  );
}

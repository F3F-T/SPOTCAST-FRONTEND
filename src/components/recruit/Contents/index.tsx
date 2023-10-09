import React from "react";
import styled from "@emotion/styled";
import Pagination from "react-js-pagination";
import FilterTab from "./FilterTab";
import RecruitCard from "./RecruitCard";
import useRecruit from "../../../hooks/useRecruit";
import Icon from "../../common/Icon";
import { GREY, INDIGO_DARK } from "../../../constants/colors";
import { IBoard } from "../../../interface/borad";

export default function Contents() {
  const { data, currentPage, onChangePage } = useRecruit();

  if (!data) return null;

  return (
    <Container>
      <FilterTab />
      <PagingWrapper>
        <CardWrapper>
          {data.data.content.map((info: IBoard) => (
            <RecruitCard info={info} />
          ))}
        </CardWrapper>
        <Paging>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={4}
            totalItemsCount={data.data.totalElements}
            pageRangeDisplayed={4}
            prevPageText={<Icon className="arrowLeft" size="1.2rem" />}
            nextPageText={<Icon className="arrowRight" size="1.2rem" />}
            hideFirstLastPages
            onChange={onChangePage}
          />
        </Paging>
      </PagingWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
`;

const PagingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paging = styled.div`
  margin-top: 3rem;
  height: 5rem;
  width: 30rem;
  justify-content: center;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  .pagination {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  ul.pagination li {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${GREY[600]};
    border-radius: 5rem;
  }

  ul.pagination li:first-child {
    border-radius: 1rem;
  }

  ul.pagination li:last-child {
    border-radius: 1rem;
  }

  ul.pagination li a {
    text-decoration: none;
    color: ${GREY[600]};
    font-size: 1.5rem;
  }

  ul.pagination li.active a {
    color: white;
  }

  ul.pagination li.active {
    background-color: ${INDIGO_DARK};
  }
`;

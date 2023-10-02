import styled from "@emotion/styled";
import { GREY, INDIGO_DARK } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CardGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7rem 2.4rem;
`;

export const Paging = styled.div`
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

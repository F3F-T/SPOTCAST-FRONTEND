import styled from "@emotion/styled";
import Input from "../common/Input";
import SelectBox from "../common/SelectBox";
import { GREY } from "../../constants/colors";

export const FilterSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const TagSelectBox = styled(SelectBox)`
  border: 0.1rem solid ${GREY[300]};
  font-size: 1.6rem;
  border-radius: 0.4rem;
  padding: 1rem 4rem;
  text-align: center;
  /* reset */
  margin: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  /* styling */
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px), calc(100% - 2.5em) 0.5em;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
`;

export const SearchInput = styled(Input)`
  & input {
    width: 74.2rem;
    padding: 1rem 4rem;
    border: 0.1rem solid ${GREY[300]};
    border-radius: 3rem;
    font-size: 1.6rem;
  }
  & label {
    display: none;
  }
`;

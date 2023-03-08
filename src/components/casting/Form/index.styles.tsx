import styled from "@emotion/styled";
import { GREY, RED } from "../../../constants/colors";
import Button from "../../common/Button";
import SelectBox from "../../common/SelectBox";

const Title = styled.div`
  background-color: white;
  font-weight: 700;
  font-size: 2.2rem;
  border: none;
  text-align: start;
  margin-right: 1.7rem;
  padding-bottom: 4rem;
`;
const SubTitle = styled.div`
  padding-top: 1rem;
  font-size: 1.5rem;
  color: ${GREY[500]};
`;

const ProfitTypeTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding-bottom: 0.6rem;
  span {
    color: ${RED.DARK};
    font-size: 2rem;
    padding-left: 0.2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  textarea {
    height: 30rem;
  }
`;

const SubmitButton = styled(Button)`
  margin-top: 2rem;
  width: 100%;
  padding: 1.5rem 2rem;
  font-size: 1.6rem;
  border-radius: 30rem;
  font-weight: 700;
`;

const TagSelectBox = styled(SelectBox)`
  border: 0.1rem solid ${GREY[400]};
  font-size: 1.4rem;
  border-radius: 0.4rem;
  padding: 1rem 3rem;
  text-align: start;
  margin-top: 0.05rem;
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
export {
  Title,
  SubTitle,
  Wrapper,
  ProfitTypeTitle,
  SubmitButton,
  TagSelectBox,
};

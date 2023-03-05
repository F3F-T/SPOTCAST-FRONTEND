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
const Form = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProfitTypeWrapper = styled.div<{ checked: boolean }>`
  ${({ checked }) => `
   border: ${
     checked ? `0.1rem solid ${GREY[800]};` : `0.1rem solid ${GREY[300]};`
   }
   :hover{
    border: ${!checked && `0.1rem solid ${GREY[500]}`}
   }
`}
  height: 3rem;
  padding: 1.8rem;
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  :hover {
    cursor: pointer;
  }
`;
const ProfitType = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
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
const TypeTitle = styled.div`
  font-size: 1.3rem;
`;

const ProfitWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Label = styled.span`
  font-size: 1.3rem;
  font-weight: 700;
  height: 3.7rem;
  display: flex;
  align-items: center;
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
  Form,
  Label,
  ProfitTypeTitle,
  ProfitTypeWrapper,
  ProfitWrapper,
  Wrapper,
  ProfitType,
  TypeTitle,
  SubTitle,
  SubmitButton,
  TagSelectBox,
};

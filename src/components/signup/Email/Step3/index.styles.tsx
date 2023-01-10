import styled from "@emotion/styled";
import Button from "../../../common/Button";
import { GREY, RED } from "../../../../constants/colors";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  input:focus {
    background-color: #fff;
  }
  padding-top: 2rem;
`;

const Wrapper = styled.div`
  width: 47rem;
  height: 65rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  border: 0.1rem solid ${GREY[400]};
  flex-direction: column;
`;

const FormWrapper = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.6rem;
  padding-bottom: 2.4rem;
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.8rem;
  padding-bottom: 1rem;
`;
const Ment = styled.div`
  color: ${GREY[500]};
  font-size: 1.4rem;
  padding-bottom: 3rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const LeftButton = styled(Button)`
  width: 10rem;
  padding: 1.7rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
`;

const RightButton = styled(Button)`
  width: 30rem;
  padding: 1.7rem 2rem;
  background-color: ${GREY[600]};
  border: none;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${GREY[500]};
    cursor: pointer;
  }
  font-size: 1.4rem;
  color: white;
`;
const ButtonDisabled = styled(Button)`
  width: 30rem;
  padding: 1.7rem 2rem;
  border-radius: 0.5rem;
  cursor: default;
  font-size: 1.4rem;
`;
const EtcWrapper = styled.div`
  width: 30rem;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 1.3rem;
  padding-bottom: 2rem;
`;
const Agree = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  color: ${GREY[500]};
`;

const CheckBox = styled.input`
  border: 1px solid white;
`;

const AgreeButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
  color: ${GREY[500]};
`;

const UserTypeWrapper = styled.div<{ checked: boolean }>`
  ${({ checked }) => `
   border: ${
     checked ? `0.1rem solid ${GREY[800]};` : `0.1rem solid ${GREY[300]};`
   }
   :hover{
    border: ${!checked && `0.1rem solid ${GREY[500]}`}
   }
`}
  width: 100%;
  height: 8rem;
  padding: 2rem;
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  :hover {
    cursor: pointer;
  }
`;
const UserType = styled.div`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const UserTypeTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  span {
    color: ${RED.DARK};
    font-size: 2rem;
    padding-left: 0.2rem;
  }
`;
const TypeTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`;

const TypeSubTitle = styled.div`
  font-size: 1.1rem;
`;

export {
  Container,
  Wrapper,
  FormWrapper,
  Title,
  SubTitle,
  Ment,
  Form,
  UserTypeTitle,
  UserTypeWrapper,
  UserType,
  LeftButton,
  RightButton,
  ButtonWrapper,
  TypeTitle,
  TypeSubTitle,
  CheckBox,
  Agree,
  AgreeButton,
  EtcWrapper,
  ButtonDisabled,
};

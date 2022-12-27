import styled from "@emotion/styled";
import { GREY } from "../../../constants/colors";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    cursor: pointer;
  }
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

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 1.4rem;
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 3rem;
  justify-content: center;
`;

const SubmitButton = styled.button`
  margin-top: 1.5rem;
  width: 35rem;
  padding: 1.7rem 2rem;
  background-color: ${GREY[600]};
  border: none;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${GREY[500]};
  }
  font-size: 1.4rem;
  color: white;
  font-weight: 700;
`;

const EtcWrapper = styled.div`
  width: 35rem;
  display: flex;
  position: relative;
  align-items: center;
  padding-top: 1.3rem;
  padding-bottom: 2rem;
`;
const Agree = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding-left: 0.5rem;
  color: ${GREY[500]};
`;

const CheckBox = styled.input`
  transform: scale(1.3);
  border: 1px solid white;
`;

const AgreeButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  font-size: 1.3rem;
  text-decoration: underline;
  color: ${GREY[500]};
`;
const SNSWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.3rem;
  color: ${GREY[600]};
  gap: 2rem;
`;

export {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Form,
  SubmitButton,
  EtcWrapper,
  CheckBox,
  Agree,
  AgreeButton,
  SNSWrapper,
};

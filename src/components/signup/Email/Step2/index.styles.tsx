import styled from "@emotion/styled";
import Button from "../../../common/Button";
import { GREY } from "../../../../constants/colors";

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
  gap: 2rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const LeftButton = styled(Button)`
  margin-top: 1.5rem;
  width: 10rem;
  padding: 1.7rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
`;
const RightButton = styled(Button)`
  margin-top: 1.5rem;
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
  margin-top: 1.5rem;
  width: 30rem;
  padding: 1.7rem 2rem;
  border-radius: 0.5rem;
  cursor: default;
  font-size: 1.4rem;
`;
const EtcTitle = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;
const EtcWrapper = styled.div`
  width: 20rem;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 2rem;
`;
const GenreWrapper = styled.div`
  width: 10rem;
  display: flex;
  align-items: center;
  padding-bottom: 1rem;
`;
const Genre = styled.div`
  font-size: 1.3rem;
  color: ${GREY[700]};
  padding-left: 0.5rem;
`;

const CheckBox = styled.input`
  transform: scale(1.3);
`;

export {
  Container,
  Wrapper,
  FormWrapper,
  Title,
  SubTitle,
  Ment,
  Form,
  LeftButton,
  RightButton,
  ButtonDisabled,
  ButtonWrapper,
  GenreWrapper,
  CheckBox,
  Genre,
  EtcTitle,
  EtcWrapper,
};

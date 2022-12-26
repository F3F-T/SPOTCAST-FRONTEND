import styled from "@emotion/styled";
import { GREY } from "../../constants/colors";
import Button from "../common/Button";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button,
  img {
    &:hover {
      cursor: pointer;
    }
  }
  input:focus {
    background-color: #fff !important;
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
  font-size: 3rem;
  padding-bottom: 1rem;
`;

const SubTitle = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  padding-bottom: 3rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 3rem;
  justify-content: center;
`;

const LoginButton = styled(Button)`
  margin-top: 1.5rem;
  width: 35rem;
  padding: 2.5rem 2rem;
  background-color: ${GREY[600]};
  border-radius: 0.5rem;
  &:hover {
    background-color: ${GREY[500]};
  }
  font-size: 1.4rem;
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
const AutoLogin = styled.div`
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

const FindPW = styled.button`
  position: absolute;
  right: 0;
  background: none;
  border: none;
  font-size: 1.3rem;
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
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;
const SNSIMG = styled.img`
  width: 4.7rem;
  height: 4.7rem;
  border-radius: 5rem;
`;

const SignUp = styled.button`
  font-weight: 700;
  color: ${GREY[800]};
  background: none;
  border: none;
  text-decoration: underline;
  padding-top: 0.5rem;
`;

export {
  Container,
  Wrapper,
  Title,
  SubTitle,
  Form,
  LoginButton,
  EtcWrapper,
  CheckBox,
  AutoLogin,
  FindPW,
  SNSWrapper,
  ImgWrapper,
  SNSIMG,
  SignUp,
};

import styled from "@emotion/styled";
import Line from "../common/Line";
import ImgButton from "../common/ImgButton";
import { GREY } from "../../constants/colors";

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
  margin-top: 2rem;
  position: relative;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 3rem;
  padding-bottom: 1rem;
`;

const ButtonWrapper = styled.div`
  width: 35rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 1.3rem;
  padding-bottom: 2rem;
  gap: 1rem;
`;

const SNSButton = styled(ImgButton)`
  font-size: 1.4rem;
  justify-content: center;
  border: 0.1rem solid ${GREY[300]};
`;

const StyledLine = styled(Line)`
  margin: 1rem 0;
`;
const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.4rem;
  padding-bottom: 3rem;
  text-align: center;
  line-height: 1.3;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.4rem;
  color: ${GREY[600]};
  gap: 2rem;
  position: absolute;
  bottom: 0;
  padding: 5rem;
`;

const Login = styled.button`
  font-weight: 700;
  color: ${GREY[800]};
  background: none;
  border: none;
  text-decoration: underline;
  padding-top: 0.5rem;
  cursor: pointer;
`;
export {
  Wrapper,
  Title,
  SubTitle,
  ButtonWrapper,
  SNSButton,
  StyledLine,
  LoginWrapper,
  Login,
};

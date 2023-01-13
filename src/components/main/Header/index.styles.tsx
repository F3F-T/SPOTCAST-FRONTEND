import styled from "@emotion/styled";
import { GREY } from "../../../constants/colors";
import Button from "../../common/Button";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: solid ${GREY[300]} 0.1rem;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 999;
`;

const Wrapper = styled.div`
  width: 108rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const Ul = styled.div`
  padding-left: 5rem;
  display: flex;
  gap: 2rem;
`;

const Li = styled.div`
  float: left;
  font-size: 1.4rem;
  &:hover {
    font-weight: 700;
  }
`;

const SearchBox = styled.div`
  position: relative;
  height: 2.6rem;
  width: 17rem;
`;

const Input = styled.input`
  position: absolute;
  background-color: #f7f9f9;
  height: 2.6rem;
  width: 17rem;
  border-radius: 2rem;
  font-weight: 300;
  border: 0.1rem solid ${GREY[300]};
  padding: 1rem 4rem;
  outline-style: none;
  color: ${GREY[900]};
`;
const IconWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0.7rem;
  left: 1.1rem;
`;
const Login = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.3rem;
  padding-left: 7rem;
`;
const LoggedIn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
`;

const UserWrapper = styled.div`
  position: relative;
`;
const Hover = styled.div`
  &:hover {
    font-weight: 600;
  }
`;

const StyledButton = styled(Button)`
  padding: 0.8rem 1.2rem;
  margin-left: 1rem;
`;

const IconButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export {
  Container,
  Wrapper,
  Logo,
  Ul,
  Li,
  Hover,
  SearchBox,
  Input,
  IconWrapper,
  IconButton,
  Login,
  LoggedIn,
  StyledButton,
  UserWrapper,
};

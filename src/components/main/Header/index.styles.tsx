import styled from "@emotion/styled";
import { GREY } from "../../../constants/colors";

const Container = styled.div`
  width: 100%;
  height: 5rem;
  border-bottom: solid ${GREY[300]} 0.1rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 68%;
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

const Input = styled.input`
  background-color: #f7f9f9;
  height: 2.6rem;
  width: 17rem;
  border-radius: 2rem;
  border: 0.1rem solid ${GREY[300]};
  padding: 1rem 3rem;
  outline-style: none;
  color: ${GREY[700]};
`;

const Login = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.3rem;
  padding-left: 7rem;
`;

const Hover = styled.div`
  &:hover {
    font-weight: 600;
  }
`;
export { Container, Wrapper, Logo, Ul, Li, Hover, Input, Login };

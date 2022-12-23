import styled from "@emotion/styled";
// import { useNavigate } from "react-router-dom";

const Container = styled.div`
  font-family: Pretendard;
  width: 100%;
  background-color: white;
  bottom: 0;
  height: 25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterWrapper = styled.div`
  width: 68%;
  height: 20rem;
  background-color: WHITE;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 2rem;
  color: black;
  margin-left: 2rem;
`;

const Lower = styled.div`
  position: relative;
  background-color: WHITE;
  display: block;
  font-size: 1.2rem;
`;
const Team = styled.div`
  margin-top: 2rem;
  margin-left: 2rem;
  margin-bottom: 1.5rem;
`;

const Contact = styled.div`
  margin-left: 2rem;
  line-height: 1.5;
`;

const ButtonsWrapper = styled.div`
  gap: 3rem;
  display: flex;
  margin-left: 5rem;
  font-size: 1.5rem;
  font-family: Pretendard;
`;

const Button = styled.button`
  color: black;
  background-color: WHITE;
  height: 2rem;
  border: none;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;

const Upper = styled.div`
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
`;

const Copyright = styled.div`
  margin-top: 3rem;
  font-size: 1.6rem;
  text-align: end;
`;

export {
  Container,
  FooterWrapper,
  Upper,
  Title,
  ButtonsWrapper,
  Button,
  Lower,
  Team,
  Contact,
  Copyright,
};

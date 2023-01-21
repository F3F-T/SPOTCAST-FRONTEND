import React from "react";
import {
  Margin,
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
} from "./index.styles";
import Line from "../../common/Line";
import { GREY } from "../../../constants/colors";

export default function Footer() {
  //   const navigate = useNavigate();

  return (
    <>
      <Margin />
      <Line width="100%" color={GREY[300]} />
      <Container>
        <FooterWrapper>
          <Upper>
            <Title>F3F</Title>
            <ButtonsWrapper>
              <Button>GitHub</Button>|<Button>FAQ</Button>|
              <Button>Private Policy</Button>|<Button>Terms</Button>
            </ButtonsWrapper>
          </Upper>
          <Line width="100%" color={GREY[300]} />
          <Lower>
            <Team>(주) F3F | Team : f3fdev2</Team>
            <Contact>
              서울특별시 은평구 연서로 19길
              <br />
              Contact: 010-2543-6064 | dbscogus4467@naver.com
            </Contact>
            <Copyright>@ 2022 All rights reserved</Copyright>
          </Lower>
        </FooterWrapper>
      </Container>
    </>
  );
}

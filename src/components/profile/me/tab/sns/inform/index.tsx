import React from "react";
import styled from "@emotion/styled";
import ImgButton from "../../../../../common/ImgButton";
import { GREY } from "../../../../../../constants/colors";
import Icon from "../../../../../common/Icon";
import { getMe } from "../../../../../../util/lib";

const Container = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const SNSbtn = styled(ImgButton)`
  border: 0.1rem solid ${GREY[300]};
  border-radius: 10rem;
  padding: 1rem 1.3rem;
  font-size: 1.5rem;
  color: ${GREY[800]};
  p {
    font-weight: 500;
  }
  &:hover {
    p {
      font-weight: 700;
    }
    border: 0.1rem solid ${GREY[600]};
  }
`;
const ButtonWrapper = styled.div`
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  top: 1.3rem;
  left: 1.5rem;
`;
export default function SNS() {
  const { me } = getMe();
  return (
    <Container>
      {me.instagram && (
        <SNSbtn
          title="instagram"
          size={2.4}
          ImgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
          href={`https://www.instagram.com/${me.instagram}/`}
        />
      )}
      {me.twitter && (
        <SNSbtn
          title="twitter"
          size={2.4}
          ImgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png"
          href={`https://twitter.com/${me.twitter}`}
        />
      )}
      {me.otherSns && (
        <ButtonWrapper>
          <SNSbtn
            title="other"
            size={2.4}
            ImgSrc="https://blog.kakaocdn.net/dn/dAEQye/btqDOkONLE0/5TK0HtrButojrSUVadJRP0/img.jpg"
          />
          <IconWrapper>
            <Icon className="plus" size="2.2rem" border={0.1} />
          </IconWrapper>
        </ButtonWrapper>
      )}
    </Container>
  );
}

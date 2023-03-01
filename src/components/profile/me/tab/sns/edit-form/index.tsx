import React from "react";
import styled from "@emotion/styled";
import { GREY } from "../../../../../../constants/colors";
import Button from "../../../../../common/Button";
import Input from "../../../../../common/Input";
import useEditForm from "../../../../../../hooks/useEditForm";

const Container = styled.div`
  width: 75rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
`;
const Form = styled.div`
  width: 100%;
  height: 60rem;
  padding: 4rem 4rem;
  display: flex;
  align-items: start;
  gap: 4rem;
  flex-direction: column;
  border: 0.1rem solid ${GREY[300]};
  border-radius: 0.5rem;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 3.3rem 0 4.3rem 0;
  position: relative;
`;
const EditButton = styled(Button)`
  font-size: 1.5rem;
  right: 0;
  padding: 0.7rem 1.4rem;
  position: absolute;
`;
const Title = styled.div`
  width: 50rem;
  font-weight: 700;
  text-align: start;
  font-size: 1.8rem;
`;
const Wrapper = styled.div`
  width: 50rem;
  position: relative;
`;

const StyledInput = styled(Input)`
  label {
    font-weight: 500;
  }
`;

export default function EditForm() {
  const {
    instagram,
    onChangeInstagram,
    twitter,
    onChangeTwitter,
    otherSns,
    onChangeOtherSns,
    onSubmitEditForm,
  } = useEditForm();

  const onClickSubmitButton = () => {
    onSubmitEditForm();
  };
  return (
    <Container>
      <ButtonWrapper>
        <EditButton
          onClick={onClickSubmitButton}
          title="수정 완료"
          buttonTheme="tertiary"
        />
      </ButtonWrapper>
      <Form>
        <Title>SNS</Title>
        <StyledInput
          type="text"
          size={65}
          label="instagram"
          placeholder="instagram ID"
          value={instagram}
          onChange={onChangeInstagram}
        />
        <StyledInput
          type="text"
          size={65}
          label="twitter"
          placeholder="twitter ID"
          value={twitter}
          onChange={onChangeTwitter}
        />
        <Wrapper>
          <StyledInput
            type="text"
            size={65}
            label="Other"
            placeholder="다른 SNS를 등록해보세요!"
            value={otherSns}
            onChange={onChangeOtherSns}
          />
        </Wrapper>
      </Form>
    </Container>
  );
}

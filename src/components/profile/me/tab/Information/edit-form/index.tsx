import React from "react";
import styled from "@emotion/styled";
import { GREY, INDIGO } from "../../../../../../constants/colors";
import Button from "../../../../../common/Button";
import Input from "../../../../../common/Input";
import useEditForm from "../../../../../../hooks/useEditForm";
import { FieldProps } from "../../../../../../interface/user";

const Container = styled.div`
  width: 75rem;
  border-radius: 0.5rem;
`;
const ButtonWrapper = styled.div`
  width: 100%;
  padding: 4.3rem 0 4.3rem 0;
  position: relative;
`;
const EditButton = styled(Button)`
  font-size: 1.5rem;
  right: 0;
  padding: 0.7rem 1.4rem;
  position: absolute;
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

const FieldButton = styled(Button)`
  font-size: 1.3rem;
  padding: 1rem 1.4rem;
`;

const FieldButtonSelected = styled(Button)`
  font-size: 1.3rem;
  padding: 0.7rem 1.4rem;
  border: 0.1rem solid ${INDIGO};
  color: ${INDIGO};
  &:hover {
    border: 0.1rem solid ${INDIGO};
    color: ${INDIGO};
  }
`;

const Title = styled.div`
  width: 50rem;
  font-weight: 700;
  text-align: start;
  font-size: 1.8rem;
`;
const Wrapper = styled.div`
  width: 65rem;
  position: relative;
`;
const FieldWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
`;
const AddButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  border: none;
  background-color: transparent;
  text-decoration: underline;
  color: ${GREY[500]};
  cursor: pointer;
`;
const StyledInput = styled(Input)`
  label {
    font-weight: 500;
  }
`;

const IntroduceInput = styled(Input)`
  textarea {
    height: 13rem;
  }
  label {
    font-weight: 500;
  }
`;

export default function EditForm() {
  const {
    name,
    information,
    egName,
    onChangeEgName,
    FieldList,
    onChangeInformation,
    onToggleField,
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
        <Title>기본 정보</Title>
        <StyledInput
          type="text"
          size={65}
          label="이름"
          placeholder="성명 입력란"
          value={name}
        />
        <StyledInput
          type="text"
          size={65}
          label="영문 이름"
          placeholder="영문 성명 입력란"
          value={egName}
          onChange={onChangeEgName}
        />
        <Wrapper>
          <StyledInput
            type="hidden"
            size={65}
            label="작업 분야"
            placeholder="자신의 아카이브를 등록해보세요!"
            value=""
          />
          <AddButton>작업 분야 추가</AddButton>
          <FieldWrapper>
            {FieldList.map((item: FieldProps) => {
              return item.exist ? (
                <FieldButtonSelected
                  key={item.name}
                  title={item.name}
                  buttonTheme="tertiary"
                  onClick={() => {
                    onToggleField(item.categoryId);
                  }}
                />
              ) : (
                <FieldButton
                  key={item.name}
                  title={item.name}
                  buttonTheme="tertiary"
                  onClick={() => {
                    onToggleField(item.categoryId);
                  }}
                />
              );
            })}
          </FieldWrapper>
        </Wrapper>
        <IntroduceInput
          isTextarea
          type="text"
          size={65}
          label="소개"
          placeholder="소개 입력란"
          value={information}
          onChange={onChangeInformation}
        />
        {/* <Title>추가 정보</Title>
        <StyledInput
          type="text"
          size={50}
          label="회사"
          placeholder="회사 입력란"
        />
        <Wrapper>
          <StyledInput
            type="text"
            size={50}
            label="아카이브"
            placeholder="자신의 아카이브를 등록해보세요!"
          />
          <AddButton>아카이브 추가</AddButton>
        </Wrapper> */}
      </Form>
    </Container>
  );
}

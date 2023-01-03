/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Input from "../../../common/Input";
import {
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
} from "./index.styles";
import useInform from "../../../../hooks/useInform";

export default function Step2() {
  const {
    name,
    onChangeName,
    nickname,
    onChangeNickname,
    CategoryList,
    checkedInputs,
    changeHandler,
  } = useInform();
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <div>
            <Title>SPOTCAST</Title>
            <SubTitle>스팟캐스트 회원 정보 입력하기</SubTitle>
            <Ment>한 단계 남았어요!</Ment>
          </div>
          <Form>
            <Input
              value={name}
              onChange={onChangeName}
              size={30}
              label="사용자 이름"
              type="text"
            />
            <Input
              value={nickname}
              onChange={onChangeNickname}
              size={30}
              label="닉네임"
              type="text"
            />
            <EtcTitle>작업 & 관심분야 (1개 이상 선택) </EtcTitle>
            <EtcWrapper>
              {CategoryList.map(item => (
                <GenreWrapper>
                  <CheckBox
                    id={item}
                    type="checkbox"
                    onChange={e => {
                      changeHandler(e.currentTarget.checked, item);
                    }}
                    checked={!!checkedInputs.includes(item)}
                  />
                  <Genre>{item}</Genre>
                </GenreWrapper>
              ))}
            </EtcWrapper>

            <ButtonWrapper>
              <LeftButton buttonTheme="tertiary" title="이전" />
              {name && nickname && checkedInputs.length > 0 ? (
                <RightButton title="다음" />
              ) : (
                <ButtonDisabled title="다음" disabled />
              )}
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

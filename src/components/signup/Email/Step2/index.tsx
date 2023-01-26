/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Input from "../../../common/Input";
import useInform from "../../../../hooks/useInform";
import {
  Container,
  Wrapper,
  FormWrapper,
  Title,
  SubTitle,
  Ment,
  Form,
  UserTypeTitle,
  UserTypeWrapper,
  UserType,
  LeftButton,
  RightButton,
  ButtonWrapper,
  TypeTitle,
  TypeSubTitle,
  CheckBox,
  Agree,
  AgreeButton,
  EtcWrapper,
  ButtonDisabled,
} from "./index.styles";
import Icon from "../../../common/Icon";
import useUserType from "../../../../hooks/useUserType";

export default function Step3() {
  const { types, onReplaceBack, onToggleCheck, onSubmitForm } = useUserType();
  const { name, onChangeName, nickname, onChangeNickname } = useInform();
  return (
    <Container>
      <Wrapper>
        <FormWrapper>
          <div>
            <Title>SPOTCAST</Title>
            <SubTitle>스팟캐스트 회원 정보 입력하기</SubTitle>
            <Ment>마지막 단계에요!</Ment>
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
            <div>
              <UserTypeTitle>
                회원타입 선택<span> *</span>
              </UserTypeTitle>
            </div>
            {types.map(item => (
              <UserTypeWrapper
                checked={item.selected}
                key={item.id}
                onClick={() => {
                  onToggleCheck(item.id);
                }}
              >
                {item.selected ? (
                  <Icon className="checked" border={0.5} size="3rem" />
                ) : (
                  <Icon className="unchecked" border={0.5} size="3rem" />
                )}
                <UserType>
                  <TypeTitle> {item.title}</TypeTitle>
                  <TypeSubTitle>{item.subTitle}</TypeSubTitle>
                </UserType>
              </UserTypeWrapper>
            ))}
          </Form>
          <EtcWrapper>
            <CheckBox type="checkbox" required />
            <Agree>SPOTCAST 가입 약관에 모두 동의합니다.</Agree>
            <AgreeButton>확인하기</AgreeButton>
          </EtcWrapper>
          <ButtonWrapper>
            <LeftButton
              buttonTheme="tertiary"
              title="이전"
              onClick={onReplaceBack}
            />
            {(types[0].selected || types[1].selected) &&
            name.length > 0 &&
            nickname.length > 0 ? (
              <RightButton onClick={onSubmitForm} title="가입 완료" />
            ) : (
              <ButtonDisabled title="가입 완료" disabled />
            )}
          </ButtonWrapper>
        </FormWrapper>
      </Wrapper>
    </Container>
  );
}

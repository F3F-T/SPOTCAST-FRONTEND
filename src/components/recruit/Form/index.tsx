import React from "react";
import * as styles from "./index.styles";
import Input from "../../common/Input";
import Line from "../../common/Line";
import useRecruit from "../../../hooks/useRecruit";
import Icon from "../../common/Icon";

export default function RecruitForm() {
  const {
    types,
    inputs,
    title,
    contents,
    onChangeTitle,
    onChangeContents,
    onSubmitForm,
    onToggleCheck,
  } = useRecruit();

  return (
    <div>
      <styles.Title>
        구인 공고 작성
        <styles.SubTitle>
          ‘Nothing Great is made alone’ : 위대한 것은 혼자 만들 수 없다.
        </styles.SubTitle>
      </styles.Title>
      <styles.Wrapper>
        <Input
          value={title}
          onChange={onChangeTitle}
          size={76}
          label="제목"
          type="text"
        />
        <styles.ProfitWrapper>
          <div>
            <styles.ProfitTypeTitle>
              수익성/비수익성(포트폴리오) 선택<span> *</span>
            </styles.ProfitTypeTitle>
          </div>
          <styles.Form>
            {types.map(item => (
              <styles.ProfitTypeWrapper
                checked={item.selected}
                key={item.id}
                onClick={() => {
                  onToggleCheck(item.id);
                }}
              >
                {item.selected ? (
                  <Icon className="checked" border={0.5} size="2rem" />
                ) : (
                  <Icon className="unchecked" border={0.5} size="2rem" />
                )}
                <styles.ProfitType>
                  <styles.TypeTitle> {item.title}</styles.TypeTitle>
                </styles.ProfitType>
              </styles.ProfitTypeWrapper>
            ))}
          </styles.Form>
        </styles.ProfitWrapper>
        {inputs.map(input => {
          return (
            <>
              <styles.Label>{input.outerLabel}</styles.Label>
              <Input
                value={input.value}
                onChange={input.onChange}
                label={input.label}
                size={input.size}
                type={input.type}
                labelType="hidden"
              />
            </>
          );
        })}
        <Line width="100%" color="white" />
        <Input
          value={contents}
          onChange={onChangeContents}
          label="상세 내용"
          size={108}
          type="text"
          isTextarea
        />
        {types[0].selected || types[1].selected ? (
          <styles.SubmitButton
            onClick={onSubmitForm}
            title="작성 완료"
            buttonTheme="primary"
          />
        ) : (
          <styles.SubmitButton
            onClick={onSubmitForm}
            title="작성 완료"
            buttonTheme="primary"
            disabled
          />
        )}
      </styles.Wrapper>
    </div>
  );
}

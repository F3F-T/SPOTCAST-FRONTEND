import React from "react";
import * as styles from "./index.styles";
import Input from "../../common/Input";
import Line from "../../common/Line";
import useCasting from "../../../hooks/useCasting";

export default function RecruitForm() {
  const {
    tagOptions,
    setSelectedTag,
    inputs,
    title,
    contents,
    onChangeTitle,
    onChangeContents,
    onSubmitForm,
  } = useCasting();

  return (
    <div>
      <styles.Title>
        캐스팅/오디션 게시
        <styles.SubTitle>
          당신의 스타를 스팟캐스트에서 찾아보세요!
        </styles.SubTitle>
      </styles.Title>
      <styles.Wrapper>
        <Input
          value={title}
          onChange={onChangeTitle}
          size={108}
          label="제목"
          type="text"
        />
        <div>
          <styles.ProfitTypeTitle>
            모집 분야 선택<span> *</span>
          </styles.ProfitTypeTitle>
          <styles.TagSelectBox
            options={tagOptions}
            onChange={tag => {
              setSelectedTag(tag);
            }}
          />
        </div>

        {inputs.map(input => {
          return (
            <Input
              label={input.outerLabel}
              value={input.value}
              onChange={input.onChange}
              placeholder={input.label}
              size={input.size}
              type={input.type}
            />
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

        <styles.SubmitButton
          onClick={onSubmitForm}
          title="작성 완료"
          buttonTheme="primary"
        />
      </styles.Wrapper>
    </div>
  );
}

import React from "react";
import * as styles from "./index.styles";
import Input from "../../common/Input";
import ProfitSelector from "./profitSelector";
import Line from "../../common/Line";
import useRecruit from "../../../hooks/useRecruit";

export default function RecruitForm() {
  const {
    title,
    recruitType,
    recruitVolume,
    regDate,
    pay,
    phone,
    supportEmail,
    participationPeriod,
    contents,
    onChangeTitle,
    onChangeRecruitType,
    onChangeRecruitVolume,
    onChangeRegDate,
    onChangePay,
    onChangePhone,
    onChangeParticipationPeriod,
    onChangeSupportEmail,
    onChangeContents,
    onSubmitForm,
  } = useRecruit();
  const inputs = [
    {
      outerLabel: "제작",
      label: "제작사 또는 조직명",
      size: 19.5,
      type: "text",
      value: "",
      onChange: "",
    },
    {
      outerLabel: "모집 분야",
      label: "ex. 영화, 모델",
      size: 19,
      type: "text",
      value: recruitType,
      onChange: onChangeRecruitType,
    },
    {
      outerLabel: "모집 인원",
      label: "필요 인원 수",
      size: 19,
      type: "text",
      value: recruitVolume,
      onChange: onChangeRecruitVolume,
    },
    {
      outerLabel: "모집 마감",
      label: "",
      size: 19,
      type: "date",
      value: regDate,
      onChange: onChangeRegDate,
    },
    {
      outerLabel: "페이",
      label: "비수익성일 경우 미기재 가능",
      size: 19.5,
      type: "text",
      value: pay,
      onChange: onChangePay,
    },
    {
      outerLabel: "전화번호",
      label: "담당자 전화번호",
      size: 19.5,
      type: "text",
      value: phone,
      onChange: onChangePhone,
    },
    {
      outerLabel: "참여 기간",
      label: "작업 참여 기간",
      size: 19.5,
      type: "text",
      value: participationPeriod,
      onChange: onChangeParticipationPeriod,
    },
    {
      outerLabel: "이메일",
      label: "담당자 이메일",
      size: 19.5,
      type: "email",
      value: supportEmail,
      onChange: onChangeSupportEmail,
    },
  ];
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
        <ProfitSelector />
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
        <styles.SubmitButton
          onClick={onSubmitForm}
          title="작성 완료"
          buttonTheme="primary"
        />
      </styles.Wrapper>
    </div>
  );
}

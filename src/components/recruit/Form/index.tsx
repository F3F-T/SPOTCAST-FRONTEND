import React from "react";
import * as styles from "./index.styles";
import Input from "../../common/Input";
import ProfitSelector from "./profitSelector";
import Line from "../../common/Line";

export default function RecruitForm() {
  return (
    <div>
      <styles.Title>
        구인 공고 작성
        <styles.SubTitle>
          ‘Nothing Great is made alone’ : 위대한 것은 혼자 만들 수 없다.
        </styles.SubTitle>
      </styles.Title>
      <styles.Wrapper>
        <Input size={76} label="제목" type="text" />
        <ProfitSelector />
        <styles.Label>제작</styles.Label>
        <Input
          label="제작사 또는 조직명"
          size={19.5}
          type="text"
          labelType="hidden"
        />
        <styles.Label>모집 분야</styles.Label>
        <Input
          label="ex. 영화, 모델"
          size={19}
          type="text"
          labelType="hidden"
        />
        <styles.Label>모집 인원</styles.Label>
        <Input label="필요 인원 수" size={19} type="text" labelType="hidden" />
        <styles.Label>모집 마감</styles.Label>
        <Input size={19} type="date" labelType="hidden" />
        <styles.Label>페이</styles.Label>
        <Input
          label="비수익성일 경우 미기재 가능"
          size={19.5}
          type="text"
          labelType="hidden"
        />
        <styles.Label>전화번호</styles.Label>
        <Input
          label="담당자 전화번호"
          size={19.5}
          type="text"
          labelType="hidden"
        />
        <styles.Label>참여 기간</styles.Label>
        <Input
          label="작업 참여 기간"
          size={19.5}
          type="text"
          labelType="hidden"
        />
        <styles.Label>이메일</styles.Label>
        <Input
          label="담당자 이메일"
          size={19.5}
          type="email"
          labelType="hidden"
        />
        <Line width="100%" color="white" />
        <Input label="상세 내용" size={108} type="text" isTextarea />
        <styles.SubmitButton title="작성 완료" buttonTheme="primary" />
      </styles.Wrapper>
    </div>
  );
}

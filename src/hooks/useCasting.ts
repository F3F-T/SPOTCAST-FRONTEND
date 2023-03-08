import { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "./useInput";
import { AppDispatch } from "../../stores/store/configureStore";
import { getMe } from "../util/lib";
import postBoard from "../api/board";

export default function useCasting() {
  const dispatch = useDispatch<AppDispatch>();
  const { me } = getMe();

  const [title, onChangeTitle] = useInput("");
  // 제작사 필드 아직 없음
  const [recruitType, onChangeRecruitType] = useInput("");
  const [regDate, onChangeRegDate] = useInput("");
  const [supportEmail, onChangeSupportEmail] = useInput("");
  const [contents, onChangeContents] = useInput("");
  const [selectedTag, setSelectedTag] = useState("전체보기");
  const tagOptions = [
    { value: "실용 음악", label: "실용 음악" },
    { value: "클래식", label: "클래식" },
    { value: "영화", label: "영화" },
    { value: "드라마", label: "드라마" },
    { value: "연극", label: "연극" },
    { value: "방송/예능", label: "방송/예능" },
    { value: "모델", label: "모델" },
    { value: "광고", label: "광고" },
    { value: "기타", label: "기타" },
  ];

  const onSubmitForm = () => {
    const data = {
      title,
      content: contents,
      supportEmail,
      recruitType,
      boardType: "CASTING_AUDITION",
      regDate: new Date(regDate),
      profitStatus: "PROFITABLE",
      category: {
        // 임시 아이디
        id: 3,
      },
      member: {
        id: me.id,
      },
    };
    dispatch(postBoard(data));
  };
  const inputs = [
    {
      outerLabel: "제작",
      label: "제작사 또는 조직명",
      size: 25.5,
      type: "text",
      value: "",
      onChange: "",
    },
    {
      outerLabel: "모집 형식",
      label: "ex. 기간 한정 오디션",
      size: 19,
      type: "text",
      value: recruitType,
      onChange: onChangeRecruitType,
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
      outerLabel: "이메일",
      label: "담당자 이메일",
      size: 24.5,
      type: "email",
      value: supportEmail,
      onChange: onChangeSupportEmail,
    },
  ];
  return {
    title,
    contents,
    onChangeTitle,
    onChangeContents,
    onSubmitForm,
    inputs,
    selectedTag,
    setSelectedTag,
    tagOptions,
  };
}

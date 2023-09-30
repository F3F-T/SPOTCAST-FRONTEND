import { useState } from "react";
import { useRouter } from "next/router";
import useInput from "./useInput";
import { getMe } from "../util/lib";
import { postBoard } from "../api/board";

export default function useCasting() {
  const { me } = getMe();
  const router = useRouter();

  const [title, onChangeTitle] = useInput("");
  const [production, onChangeProduction] = useInput("");
  const [recruitType, onChangeRecruitType] = useInput("");
  const [regDate, onChangeRegDate] = useInput("");
  const [supportEmail, onChangeSupportEmail] = useInput("");
  const [content, onChangeContent] = useInput("");
  const [selectedTag, setSelectedTag] = useState("전체보기");
  const tagOptions = [
    { value: 4, label: "실용 음악" },
    { value: 5, label: "클래식" },
    { value: 6, label: "영화" },
    { value: 7, label: "드라마" },
    { value: 8, label: "연극" },
    { value: 9, label: "방송/예능" },
    { value: 10, label: "모델" },
    { value: 11, label: "광고" },
    { value: 12, label: "기타" },
  ];
  const onSubmitForm = async () => {
    const data = {
      title,
      content,
      supportEmail,
      recruitType,
      production,
      boardType: "CASTING_AUDITION",
      regDate: new Date(regDate),
      profitStatus: "PROFITABLE",
      category: {
        // 임시 아이디
        id: Number(selectedTag),
      },
      member: {
        id: me.id,
      },
    };
    await postBoard(data);
  };
  const inputs = [
    {
      outerLabel: "제작",
      label: "제작사 또는 조직명",
      size: 25.5,
      type: "text",
      value: production,
      onChange: onChangeProduction,
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

  const replacePostPage = (id: number) => {
    router.push(`/casting/${id}`);
  };

  const replaceFormPage = () => {
    router.push("/casting/form");
  };

  return {
    title,
    content,
    onChangeTitle,
    onChangeContent,
    onSubmitForm,
    inputs,
    selectedTag,
    setSelectedTag,
    tagOptions,
    replacePostPage,
    replaceFormPage,
  };
}

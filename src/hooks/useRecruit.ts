import { useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useInput from "./useInput";
import { AppDispatch } from "../../stores/store/configureStore";
import { getMe } from "../util/lib";
import { postBoard } from "../api/board";

export default function useRecruit() {
  const dispatch = useDispatch<AppDispatch>();
  const { me } = getMe();

  const router = useRouter();
  const [title, onChangeTitle] = useInput("");
  // 제작사 필드 아직 없음
  const [recruitType, onChangeRecruitType] = useInput("");
  const [recruitVolume, onChangeRecruitVolume] = useInput("");
  const [regDate, onChangeRegDate] = useInput("");
  const [pay, onChangePay] = useInput("");
  const [phone, onChangePhone] = useInput("");
  const [supportEmail, onChangeSupportEmail] = useInput("");
  const [participationPeriod, onChangeParticipationPeriod] = useInput("");
  const [contents, onChangeContents] = useInput("");
  const [profitStatus, setProfitStatus] = useState("PROFITABLE");
  const [selectedTag, setSelectedTag] = useState("전체보기");
  const tagOptions = [
    { value: "실용 음악", label: "실용 음악" },
    { value: "클래식", label: "클래식" },
    { value: "영화", label: "영화" },
    { value: "드라마", label: "드라마" },
    { value: "연극", label: "연극" },
    { value: "연출", label: "연출" },
    { value: "방송/예능", label: "방송/예능" },
    { value: "모델", label: "모델" },
    { value: "광고", label: "광고" },
    { value: "기타", label: "기타" },
  ];

  const replacePostPage = () => {
    router.push("/recruit/post");
  };

  const replaceFormPage = () => {
    router.push("/recruit/form");
  };

  const [types, setTypes] = useState([
    {
      id: 0,
      title: "수익성",
      selected: true,
      profitStatus: "PROFITABLE",
    },
    {
      id: 1,
      title: "비수익성(포트폴리오)",
      selected: false,
      profitStatus: "NON_PROFITABLE",
    },
  ]);

  const onToggleCheck = useCallback(
    (id: number) => {
      setTypes(
        types.map(type =>
          // eslint-disable-next-line no-nested-ternary
          type.id === id
            ? { ...type, selected: !type.selected }
            : type.id !== id && type.selected === true
            ? { ...type, selected: !type.selected }
            : type,
        ),
      );
    },
    [types],
  );
  useEffect(() => {
    if (types[0].selected && !types[1].selected)
      setProfitStatus(types[0].profitStatus);
    else if (!types[0].selected && types[1].selected)
      setProfitStatus(types[1].profitStatus);
  }, [types]);

  const onSubmitForm = () => {
    const data = {
      title,
      content: contents,
      supportEmail,
      phone,
      pay: +pay,
      participationPeriod: +participationPeriod,
      recruitVolume: +recruitVolume,
      recruitType,
      profitStatus,
      boardType: "RECRUIT",
      regDate: new Date(regDate),
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
  return {
    types,
    replacePostPage,
    replaceFormPage,
    onToggleCheck,
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

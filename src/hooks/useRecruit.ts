import { useRouter } from "next/router";
import useSWR from "swr";
import { useCallback, useState, useEffect } from "react";
import useInput from "./useInput";
import { getMe } from "../util/lib";
import { loadBoard, postBoard } from "../api/board";
import { BOARD_TYPE, CATEGORY_ID, REG_STATUS } from "../constants/boardType";
import swrKeys from "../constants/swrKeys";

export default function useRecruit() {
  const { me } = getMe();

  const router = useRouter();
  const [title, onChangeTitle] = useInput("");
  const [production, onChangeProduction] = useInput("");
  const [recruitType, onChangeRecruitType] = useInput("");
  const [recruitVolume, onChangeRecruitVolume] = useInput("");
  const [regDate, onChangeRegDate] = useInput("");
  const [pay, onChangePay] = useInput("");
  const [phone, onChangePhone] = useInput("");
  const [supportEmail, onChangeSupportEmail] = useInput("");
  const [participationPeriod, onChangeParticipationPeriod] = useInput("");
  const [content, onChangeContent] = useInput("");
  const [profitStatus, setProfitStatus] = useState("PROFITABLE");
  const [selectedTag, setSelectedTag] = useState(3);
  const tagOptions: { label: string; value: number }[] = (
    Object.keys(CATEGORY_ID) as (keyof typeof CATEGORY_ID)[]
  ).map(label => ({
    value: CATEGORY_ID[label],
    label: label.toString(),
  }));
  const replacePostPage = (id: number) => {
    router.push(`/recruit/post/${id}`);
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

  const onSubmitForm = async () => {
    const data = {
      title,
      content,
      supportEmail,
      phone,
      pay,
      participationPeriod,
      recruitVolume,
      recruitType,
      profitStatus,
      production,
      boardType: BOARD_TYPE.RECRUIT,
      regDate: new Date(regDate),
      category: {
        id: Number(selectedTag),
      },
      member: {
        id: me.id,
      },
    };
    console.log(data);
    await postBoard(data);
  };
  const inputs = [
    {
      outerLabel: "제작",
      label: "제작사 또는 조직명",
      size: 19.5,
      type: "text",
      value: production,
      onChange: onChangeProduction,
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

  const { category, page, profitable, regStatus } = router.query;

  const [currentPage, setCurrentPage] = useState(Number(page) + 1);
  const onChangePage = (newPage: number) => {
    setCurrentPage(newPage);
    router.replace(
      `/recruit?category=${category}&page=${
        newPage - 1
      }&profitable=${profitable}&regStatus=${regStatus}`,
    );
  };

  const onChangeCategory = (categoryId: number) => {
    router.replace(
      `/recruit?category=${categoryId}&page=0&profitable=${profitable}&regStatus=${REG_STATUS.ALL}`,
    );
  };

  const onChangeRegStatus = (newRegStatus: string) => {
    router.replace(
      `/recruit?category=${category}&page=0&profitable=${profitable}&regStatus=${newRegStatus}`,
    );
  };

  const onChangeProfitable = (newProfitable: string) => {
    router.replace(
      `/recruit?category=${category}&page=0&profitable=${newProfitable}&regStatus=${regStatus}`,
    );
  };

  const swrRecruitKey = `${swrKeys.loadRecruitKey}?category=${
    category || 0
  }&page=${page || 0}&profitable=${profitable}&regStatus=${regStatus}`;

  const { data } = useSWR(swrRecruitKey, () =>
    loadBoard(
      BOARD_TYPE.RECRUIT,
      category ? +category : 0,
      profitable || "PROFITABLE",
      page ? +page : 0,
      4,
      regStatus || "ALL",
    ),
  );

  useEffect(() => {
    setCurrentPage(Number(page) + 1);
  }, [page]);

  return {
    types,
    replacePostPage,
    replaceFormPage,
    onToggleCheck,
    title,
    content,
    onChangeTitle,
    onChangeContent,
    onSubmitForm,
    inputs,
    selectedTag,
    setSelectedTag,
    tagOptions,
    data,
    currentPage,
    onChangePage,
    onChangeCategory,
    onChangeProfitable,
    onChangeRegStatus,
    regStatus,
    category,
  };
}

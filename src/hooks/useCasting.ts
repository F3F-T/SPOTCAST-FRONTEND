import { useEffect, useState } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import useInput from "./useInput";
import { getMe } from "../util/lib";
import { loadBoard, postBoard } from "../api/board";
import { BOARD_TYPE, CATEGORY_ID } from "../constants/boardType";
import swrKeys from "../constants/swrKeys";

export default function useCasting() {
  const { me } = getMe();
  const router = useRouter();

  const [title, onChangeTitle] = useInput("");
  const [production, onChangeProduction] = useInput("");
  const [recruitType, onChangeRecruitType] = useInput("");
  const [regDate, onChangeRegDate] = useInput("");
  const [supportEmail, onChangeSupportEmail] = useInput("");
  const [content, onChangeContent] = useInput("");
  const [selectedTag, setSelectedTag] = useState(3);
  const tagOptions = (
    Object.keys(CATEGORY_ID) as (keyof typeof CATEGORY_ID)[]
  ).map(label => ({
    value: CATEGORY_ID[label],
    label,
  }));
  const onSubmitForm = async () => {
    const data = {
      title,
      content,
      supportEmail,
      recruitType,
      production,
      boardType: BOARD_TYPE.CASTING_AUDITION,
      regDate: new Date(regDate),
      profitStatus: "PROFITABLE",
      category: {
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
    router.push(`/casting/post/${id}`);
  };

  const replaceFormPage = () => {
    router.push("/casting/form");
  };

  const { category, page } = router.query;
  const [currentPage, setCurrentPage] = useState(Number(page) + 1);
  const onChangePage = (newPage: number) => {
    setCurrentPage(newPage);
    router.replace(`/casting?category=${category}&page=${newPage - 1}`);
  };

  const onChangeCategory = (categoryId: number) => {
    router.replace(`/casting?category=${categoryId}&page=0`);
  };

  const swrCastingKey = `${swrKeys.loadCastingKey}?category=${
    category || 0
  }&page=${page || 0}`;

  const { data } = useSWR(swrCastingKey, () =>
    loadBoard(
      BOARD_TYPE.CASTING_AUDITION,
      category ? +category : 0,
      null,
      page ? +page : 0,
      12,
      null,
    ),
  );

  useEffect(() => {
    setCurrentPage(Number(page) + 1);
  }, [page]);

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
    currentPage,
    onChangePage,
    data,
    onChangeCategory,
    category,
  };
}

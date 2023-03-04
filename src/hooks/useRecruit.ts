import { useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useInput from "./useInput";
import { AppDispatch } from "../../stores/store/configureStore";
import { getMe } from "../util/lib";
import postRecruit from "../api/recruit";

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
    // eslint-disable-next-line array-callback-return
    types.map(i => {
      if (i.selected) {
        setProfitStatus(i.profitStatus);
      }
    });
    console.log(profitStatus);
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
    console.log(profitStatus);
    dispatch(postRecruit(data));
  };
  return {
    types,
    replacePostPage,
    replaceFormPage,
    onToggleCheck,
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
    onChangeSupportEmail,
    onChangeParticipationPeriod,
    onChangeContents,
    onSubmitForm,
  };
}

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../stores/store/configureStore";
import { authSignUp } from "../api/auth";
import { signUp } from "../../stores/reducers/user";
import { RootState } from "../../stores/reducers";
import useInput from "./useInput";

export default function useUserType() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { me, signUpError, signUpDone } = useSelector(
    (state: RootState) => state.user,
  );
  const [name, onChangeName] = useInput("");
  const [bchecked, setBcheked] = useState(false);
  const [types, setTypes] = useState([
    {
      id: 0,
      title: "🎨 아티스트",
      subTitle: `캐스팅/오디션 정보를 확인하고\n
            여러가지 영감을 받아가고 싶다면, 아티스트로 시작하세요!`,
      selected: true,
      loginMemberType: "GENERAL_USER",
    },
    {
      id: 1,
      title: "🧑‍💻 회사",
      subTitle: `캐스팅/오디션 정보를 등록하고, 당신의 뮤즈를 찾아보세요!`,
      selected: false,
      loginMemberType: "COMPANY_USER",
    },
  ]);

  useEffect(() => {
    if (types[0].selected && !types[1].selected)
      dispatch(signUp({ loginMemberType: types[0].loginMemberType }));
    else if (!types[0].selected && types[1].selected)
      dispatch(signUp({ loginMemberType: types[1].loginMemberType }));
  }, [types]);

  const checkHandler = useCallback(() => {
    setBcheked(!bchecked);
  }, [bchecked]);

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

  const onReplaceBack = () => {
    router.back();
  };

  const onSubmitForm = async () => {
    await dispatch(
      signUp({
        name,
      }),
    );
    await dispatch(authSignUp(me));
  };

  return {
    name,
    onChangeName,
    types,
    onToggleCheck,
    onReplaceBack,
    onSubmitForm,
    signUpError,
    signUpDone,
    bchecked,
    checkHandler,
  };
}

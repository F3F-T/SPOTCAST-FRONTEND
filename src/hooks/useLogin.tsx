import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import { RootState } from "../../stores/reducers";
import { AppDispatch } from "../../stores/store/configureStore";
import { authLogin, getMember } from "../api/auth";
import { loginTest } from "../../stores/reducers/user";

import useInput from "./useInput";

export default function useLogin() {
  const router = useRouter();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch<AppDispatch>();
  const { loginDone, me } = useSelector((state: RootState) => state.user);

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(authLogin({ email, password }));
      if (loginDone) {
        localStorage.setItem("email", me.email);
        localStorage.setItem("access_token", me.accessToken);
        console.log(`${me.email}님 로그인이 완료되었습니다.`);
        dispatch(getMember());
        router.push("/");
      }
      dispatch(loginTest()); // TEST
    },
    [email, password],
  );

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmitForm,
  };
}

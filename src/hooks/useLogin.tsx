import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { AppDispatch } from "../../stores/store/configureStore";
import { authLogin, getMember } from "../api/auth";
import { RootState } from "../../stores/reducers";

import useInput from "./useInput";

export default function useLogin() {
  const router = useRouter();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch<AppDispatch>();
  const { loginDone, loginError, me } = useSelector(
    (state: RootState) => state.user,
  );

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(authLogin({ email, password }));
    },
    [email, password],
  );

  useEffect(() => {
    if (loginDone) {
      localStorage.setItem("email", me.email);
      localStorage.setItem("access_token", me.accessToken);
      // dispatch(getMember());
      router.push("/");
    }
    if (loginError) {
      alert(loginError.message);
    }
  }, [loginDone, loginError]);

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmitForm,
  };
}

import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { AppDispatch } from "../../stores/store/configureStore";
import { authLogin, authLogout } from "../api/auth";
import { RootState } from "../../stores/reducers";
import { loginTest } from "../../stores/reducers/user";
import useInput from "./useInput";

export default function useLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // oAuth AccessToken

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch<AppDispatch>();
  const { loginDone, loginError, me } = useSelector(
    (state: RootState) => state.user,
  );

  const useoAuthRedirct = () => {
    if (token) {
      const prevPath = sessionStorage.getItem("prevPath");
      dispatch(loginTest());
      if (prevPath) {
        router.push(`${prevPath}`);
      } else router.push("/");
    }
  };

  const useLogout = useCallback(() => {
    dispatch(authLogout());
  }, []);

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(authLogin({ email, password }));
    },
    [email, password],
  );

  useEffect(() => {
    if (loginDone && me) {
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
    useoAuthRedirct,
    useLogout,
    token,
  };
}

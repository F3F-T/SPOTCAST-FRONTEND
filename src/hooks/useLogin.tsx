import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect } from "react";
import { AppDispatch } from "../../stores/store/configureStore";
import { authLogin, authLogout } from "../api/auth";
import { RootState } from "../../stores/reducers";
import useInput from "./useInput";

export default function useLogin() {
  const router = useRouter();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  const dispatch = useDispatch<AppDispatch>();
  const { loginDone, me } = useSelector((state: RootState) => state.user);

  const useoAuthRedirct = () => {
    const prevPath = sessionStorage.getItem("prevPath");
    if (prevPath) {
      router.push(`${prevPath}`);
    } else router.push("/");
  };

  const useLogout = useCallback(() => {
    dispatch(authLogout());
    router.push("/");
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
  }, [loginDone]);

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmitForm,
    useoAuthRedirct,
    useLogout,
  };
}

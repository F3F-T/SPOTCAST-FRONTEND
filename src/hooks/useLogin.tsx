import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { authLogin, getMember } from "../api/auth";
import { loginTest } from "../../stores/reducers/user";
import { RootState } from "../../stores/reducers";
import { AppDispatch } from "../../stores/store/configureStore";
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
        router.replace("/");
      }
      dispatch(loginTest({ email, password })); // TEST
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

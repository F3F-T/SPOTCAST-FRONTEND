import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { authSignUp } from "../api/auth";
import { AppDispatch } from "../../stores/store/configureStore";
import useInput from "./useInput";

export default function useSignUp() {
  const router = useRouter();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const dispatch = useDispatch<AppDispatch>();

  const onSubmitForm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(authSignUp({ email, password }));
      router.push("/");
    },
    [email, password, passwordCheck],
  );

  return {
    email,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    onSubmitForm,
  };
}

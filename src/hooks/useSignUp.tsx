import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { authSignUp, authEmail } from "../api/auth";
import { AppDispatch } from "../../stores/store/configureStore";
import useInput from "./useInput";

export default function useSignUp() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const emailReg =
    /^[0-9a-zA-Z가-힣]([-_.]?[0-9a-zA-Z가-힣])*@[0-9a-zA-Z가-힣]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const isValidEmail = emailReg.test(email);

  const onCheckEmailAuth = () => {
    authEmail(email);
  };

  const onReplaceBack = () => {
    router.push("/signup");
  };

  const onReplaceNext = () => {
    router.push("/signup/email/inform");
  };

  const onSubmitForm = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(authSignUp({ email, password }));
    router.push("/");
  }, []);

  return {
    email,
    isValidEmail,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    onCheckEmailAuth,
    onReplaceBack,
    onReplaceNext,
    onSubmitForm,
  };
}

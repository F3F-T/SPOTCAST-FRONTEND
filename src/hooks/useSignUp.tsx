import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { useCallback, useState, useRef, useEffect } from "react";
import { authSignUp, authEmailSend, authEmailConfirms } from "../api/auth";
import { AppDispatch } from "../../stores/store/configureStore";
import useInput from "./useInput";

export default function useSignUp() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [email, onChangeEmail] = useInput("");
  const [authNumber, onChangeAuthNumber] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");
  const [isEmailConfirms, setIsEmailConfirms] = useState(false);

  const emailReg =
    /^[0-9a-zA-Z가-힣]([-_.]?[0-9a-zA-Z가-힣])*@[0-9a-zA-Z가-힣]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  const isValidEmail = emailReg.test(email);

  const onCheckEmailAuth = () => {
    authEmailSend(email);
  };

  const onSubmitEmailAuth = useCallback(() => {
    authEmailConfirms(email, authNumber)
      .then(res => {
        const isConfirmedEmail = res.data;
        if (isConfirmedEmail) setIsEmailConfirms(true);
      })
      .catch(err => {
        if (err.response.status === 403) {
          console.error("에러!");
        }
      });
  }, [authNumber]);

  const AuthTimer = () => {
    const VALIDTIME = 60;
    const time = useRef<number>(VALIDTIME);

    const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);

    const [min, setMin] = useState(1);
    const [sec, setSec] = useState(0);

    const decreaseNum = () => {
      time.current -= 1;
      setMin(Math.floor(time.current / 60));
      setSec(time.current % 60);
    };
    const onStartTimer = () => {
      onCheckEmailAuth();
      intervalRef.current = setInterval(decreaseNum, 1000);
      return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    };

    useEffect(() => {
      if (time.current <= 0) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    }, [sec]);

    return { time, min, sec, onStartTimer };
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
    authNumber,
    onChangeAuthNumber,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    onCheckEmailAuth,
    isEmailConfirms,
    onReplaceBack,
    onReplaceNext,
    onSubmitForm,
    onSubmitEmailAuth,
    AuthTimer,
  };
}

/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/navigation";
import { authLogin, authSignUp, getMember } from "../api/auth";

export const useLogin = (email: string, password: string) => {
  const router = useRouter();

  authLogin(email, password).then(result => {
    localStorage.setItem("email", email);
    localStorage.setItem("access_token", result.data.access_token);
    getMember()
      .then(res => {
        console.log(`${res.data.email}님 로그인이 완료되었습니다.`);
      })
      .catch(err => {
        if (err.response.status === 403) {
          console.error("에러!");
        }
        localStorage.removeItem("access_token");
      });
  });
  router.push("/");
};

export const useSignUp = (email: string, password: string) => {
  const router = useRouter();
  authSignUp(email, password)
    .then(res => {
      console.log("가입된 이메일로 인증 메일을 발송했습니다.");
      console.log(res.data);
    })
    .catch(err => {
      if (err.response.data.message === "이미 있으면") {
        console.error("이미 있는 이메일입니다");
      }
    });
  router.replace("/");
};

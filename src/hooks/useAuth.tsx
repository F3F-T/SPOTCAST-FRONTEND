import { authLogin, authSignUp, getMember } from "../api/auth";

export const login = (email: string, password: string) => {
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
};

export const signup = (email: string, password: string) => {
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
};

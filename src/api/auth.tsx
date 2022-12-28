import { authorizationClient, unAuthorizationClient } from ".";
import API from "./config";

const authLogin = (email: string, password: string) => {
  return unAuthorizationClient
    .post(API.LOGIN, { email, password })
    .then(res => res.data);
};

const authSignUp = (email: string, password: string) => {
  return unAuthorizationClient
    .post(API.SIGNUP, { email, password })
    .then(res => res.data);
};

const getMember = () => {
  return authorizationClient.get(API.ME).then(res => res.data);
};

export { authLogin, authSignUp, getMember };

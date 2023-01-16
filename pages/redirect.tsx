import React from "react";
import axios from "axios";
import Redirct from "../src/components/login/redirect";
import wrapper from "../stores/store/configureStore";
import { storeCookie } from "../stores/reducers/user";
import { getMember } from "../src/api/auth";
import { useRedirect } from "../src/hooks/useAuth";

export default function Page() {
  useRedirect();

  return <Redirct />;
}
// export const getServerSideProps = wrapper.getServerSideProps(store =>
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   async ({ req, res, ...etc }) => {
//     const cookie = req ? req.headers.cookie : "";
//     axios.defaults.headers.Cookie = "";

//     if (req && cookie) {
//       axios.defaults.headers.Cookie = cookie;
//       await store.dispatch(storeCookie(cookie));
//     }
//     await store.dispatch(getMember());

//     return {
//       props: {},
//     };
//   },
// );

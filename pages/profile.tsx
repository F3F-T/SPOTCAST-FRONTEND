import React from "react";
import axios from "axios";
import UserProfile from "../src/components/profile/me";
import AppLayout from "../styles/AppLayout";
import wrapper from "../stores/store/configureStore";
import { storeCookie } from "../stores/reducers/user";
import { getMember } from "../src/api/auth";
import { useRedirect } from "../src/hooks/useAuth";

function Page() {
  useRedirect();

  return (
    <AppLayout>
      <UserProfile />
    </AppLayout>
  );
}

export default Page;

export const getServerSideProps = wrapper.getServerSideProps(store =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ req, res, ...etc }) => {
    const cookie = req ? req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";

    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    await store.dispatch(loadMe());
    await store.dispatch(loadField());

    return {
      props: {},
    };
  },
);

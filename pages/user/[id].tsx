import React from "react";
import axios from "axios";
import UserProfile from "../../src/components/profile/user";
import AppLayout from "../../styles/AppLayout";
import wrapper from "../../stores/store/configureStore";
import { loadMe } from "../../src/api/auth";
import { useRedirect } from "../../src/hooks/useAuth";
import { loadUser } from "../../src/api/user";

export default function Page() {
  useRedirect();

  return (
    <AppLayout>
      <UserProfile />
    </AppLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(store =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ req, res, query }) => {
    const cookie = req ? req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";

    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    await store.dispatch(loadMe());
    await store.dispatch(loadUser({ userId: query.id }));
    return {
      props: {},
    };
  },
);

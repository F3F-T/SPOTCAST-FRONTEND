import React from "react";
import axios from "axios";
import Message from "../src/components/message";
import AppLayout from "../styles/AppLayout";
import wrapper from "../stores/store/configureStore";
import { storeCookie } from "../stores/reducers/user";
import { loadMe } from "../src/api/auth";
import { useMessageRoomRedirect } from "../src/hooks/useAuth";
import { preLoadMsgReceived } from "../src/api/message";

function Page() {
  useMessageRoomRedirect();

  return (
    <AppLayout>
      <Message />
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
      await store.dispatch(storeCookie(cookie));
    }
    await store.dispatch(loadMe());
    await store.dispatch(preLoadMsgReceived({ page: 0, size: 4 }));

    return {
      props: {},
    };
  },
);

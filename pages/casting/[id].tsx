import React from "react";
import axios from "axios";
import AppLayout from "../../styles/AppLayout";
import wrapper from "../../stores/store/configureStore";
import { loadMe } from "../../src/api/auth";
import { useRedirect } from "../../src/hooks/useAuth";
import Post from "../../src/components/casting/Post";

// 추후에 다이나믹 라우팅으로 변경
function Page({ id }: { id: number }) {
  useRedirect();
  return (
    <AppLayout>
      <Post postId={id} />
    </AppLayout>
  );
}

export default Page;

export const getServerSideProps = wrapper.getServerSideProps(store =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ req, res, query }) => {
    const { id } = query;

    const cookie = req ? req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";

    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    await store.dispatch(loadMe());

    return {
      props: { id },
    };
  },
);

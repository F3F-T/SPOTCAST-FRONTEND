import React from "react";
import axios from "axios";
import AppLayout from "../../styles/AppLayout";
import wrapper from "../../stores/store/configureStore";
import { loadMe } from "../../src/api/auth";
import { useRedirect } from "../../src/hooks/useAuth";
import RecruitForm from "../../src/components/recruit/Form";

function Page() {
  useRedirect();
  return (
    <AppLayout>
      <RecruitForm />
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

    return {
      props: {},
    };
  },
);

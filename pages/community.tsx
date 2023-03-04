import React from "react";
import axios from "axios";
import styled from "@emotion/styled";
import wrapper from "../stores/store/configureStore";
import { loadMe } from "../src/api/auth";
import { useRedirect } from "../src/hooks/useAuth";
import AppLayout from "../styles/AppLayout";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
  gap: 2rem;
  h2 {
    font-size: 3rem;
    font-weight: 700;
  }
  h4 {
    font-size: 2rem;
  }
  h5 {
    font-weight: 300;
    font-size: 1.6rem;
  }
`;
export default function Page() {
  useRedirect();

  return (
    <AppLayout>
      <Wrapper>
        <h5>SPOTCAST COMMUNITY</h5>
        <h2>서비스 준비중입니다.</h2>
        <h4>빠른 시일 내로 준비하여 찾아뵙겠습니다.🙇‍♀️</h4>
      </Wrapper>
    </AppLayout>
  );
}

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

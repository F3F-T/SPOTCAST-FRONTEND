import React from "react";
import axios from "axios";
import Footer from "../src/components/main/Footer";
import Header from "../src/components/main/Header";
import Carousel from "../src/components/main/Carousel";
import MainArticle1 from "../src/components/main/section/hotPortfolio";
import MainArticle3 from "../src/components/main/section/communityPreview";
import MainArticle2 from "../src/components/main/section/findCrew";
import wrapper from "../stores/store/configureStore";
import { storeCookie } from "../stores/reducers/user";
import { getMember } from "../src/api/auth";

export default function Page() {
  return (
    <div>
      <Header />
      <Carousel />
      <MainArticle1 />
      <MainArticle2 />
      <MainArticle3 />
      <Footer />
    </div>
  );
}
// SSR (프론트 서버에서 실행)
export const getServerSideProps = wrapper.getServerSideProps(store =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ req, res, ...etc }) => {
    const cookie = req ? req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    // 쿠키가 브라우저에 있는경우만 넣어서 실행
    // 주의, 아래 조건이 없다면 다른 사람으로 로그인 될 수도 있음
    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
      // 쿠키 테스트용
      await store.dispatch(storeCookie(cookie));
    }

    await store.dispatch(getMember());

    return {
      props: {},
    };
  },
);

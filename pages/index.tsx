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
import { getMember, updateAuth, refreshAuth } from "../src/api/auth";

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

export const getServerSideProps = wrapper.getServerSideProps(store =>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async ({ req, res, ...etc }) => {
    const cookie = req ? req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";

    if (req && cookie) {
      axios.defaults.headers.Cookie = cookie;
      await store.dispatch(storeCookie(cookie));
    }

    await updateAuth()
      .then(async () => {
        // 유효한 토큰 => 유저 정보 로드
        await store.dispatch(getMember());
      })
      .catch(async error => {
        // 유효하지 않은 토큰(401) => 리이슈 요청
        switch (error.response?.data?.code) {
          // 로그인 하지 않은 사용자가 요청
          case 400:
            break;
          // 액세스 토큰 만료
          case 401:
            refreshAuth()
              .then(async () => {
                await store.dispatch(getMember());
              })
              .catch(async err => {
                await store.dispatch(storeCookie(err.response.data));
              });
            break;
          // 접근 권한 없음(ex. ADMIN페이지에 USER가 접근)
          case 403:
            break;
          default:
            break;
        }
      });

    return {
      props: {},
    };
  },
);

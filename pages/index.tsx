import React from "react";
import axios from "axios";
import Footer from "../src/components/main/Footer";
import Header from "../src/components/main/Header";
import Carousel from "../src/components/main/Carousel";
import MainArticle1 from "../src/components/main/Section/hotPortfolio";
import MainArticle3 from "../src/components/main/Section/communityPreview";
import MainArticle2 from "../src/components/main/Section/findCrew";
import wrapper from "../stores/store/configureStore";
import { loadMe } from "../src/api/auth";
import { useRedirect } from "../src/hooks/useAuth";

export default function Page() {
  useRedirect();

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
    }
    await store.dispatch(loadMe());

    return {
      props: {},
    };
  },
);

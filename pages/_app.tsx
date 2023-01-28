/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import Head from "next/head";
import StyledContainer from "../src/components/common/Toast/container";
import wrapper from "../stores/store/configureStore";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SPOTCAST</title>
      </Head>
      <Component {...pageProps} />
      <StyledContainer
        className="toast"
        position="top-center"
        closeButton={false}
        limit={1}
      />
    </>
  );
}
export default wrapper.withRedux(App);

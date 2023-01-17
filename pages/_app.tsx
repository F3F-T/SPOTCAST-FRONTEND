/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import StyledContainer from "../src/components/common/Toast/container";
import wrapper from "../stores/store/configureStore";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <StyledContainer
        className="toast"
        position="top-center"
        closeButton={false}
      />
    </>
  );
}
export default wrapper.withRedux(App);

/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import wrapper from "../stores/store/configureStore";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
export default wrapper.withRedux(App);

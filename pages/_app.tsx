import type { AppProps } from "next/app";
import wrapper from "../stores/store/configureStore";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(App);

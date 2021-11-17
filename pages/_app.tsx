import type { AppProps } from "next/app";
import Head from "next/head";

import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../styles/Theme";
import GlobalStyle from "../styles/Global";

// 최신 next redux 는 Provider store 를 사용하지 않는다.
import wrapper from "@store";

// Redux
import type { RootState } from "@store";
import { useSelector } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  const { mode } = useSelector((store: RootState) => store.mode);

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Head>
        <title>GOOLONGE</title>
        <meta name="description" content="goolonge blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);

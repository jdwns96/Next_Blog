import type { AppProps } from "next/app";
import Head from "next/head";
import Image from "next/image";

import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../styles/Theme";
import GlobalStyle from "../styles/Global";

import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(true);

  return (
    <ThemeProvider theme={mode ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Head>
        <title>Goolonge</title>
        <meta name="description" content="goolonge blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

export default MyApp;

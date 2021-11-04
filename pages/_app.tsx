import type { AppProps } from "next/app";

import { ThemeProvider } from "@emotion/react";
import Theme from "../styles/Theme";
import GlobalStyle from "../styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;

import type { AppProps } from "next/app";

import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../styles/Theme";
import GlobalStyle from "../styles/Global";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(true);

  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Component {...pageProps} mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
}

export default MyApp;

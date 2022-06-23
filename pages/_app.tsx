import "../styles/globals.css";
import type { AppProps } from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { observer } from "mobx-react-lite";

const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  margin:0;
  padding: 0;
}

body{
  padding: 0;
  margin-top:0;
  box-sizing: border-box;
}
`;

const theme = {
  colors: {
    primary: "#ffffff",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default observer(MyApp);

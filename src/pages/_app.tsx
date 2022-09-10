import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import PageContainer from "../components/PageContainer";
import "../styles/globals.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFB3B3",
    },
    secondary: {
      main: "#FFDBA4",
    },
    // third: #FFE9AE
    background: {
      default: "#C1EFFF",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ThemeProvider>
  );
}

export default MyApp;

import { createTheme, ThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import PageContainer from "../components/PageContainer";
import { ThreeHeader } from "../components/ThreeHeader";
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
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: { fontFamily: "'Montserrat', sans-serif", fontSize: 64, fontWeight: 500 },
    h2: { fontFamily: "Montserrat, sans-serif", fontSize: 32, fontWeight: 400 },
    h3: { fontFamily: "Montserrat, sans-serif", fontSize: 24, fontWeight: 400 },
    h4: { fontFamily: "Montserrat, sans-serif", fontSize: 20, fontWeight: 400 },
    h5: { fontFamily: "Montserrat, sans-serif" },
    h6: { fontFamily: "Montserrat, sans-serif" },
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

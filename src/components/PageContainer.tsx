import { Box } from "@mui/material";
import { ReactElement, ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

type PageContainerProps = {
  children?: ReactNode;
};
export default function PageContainer(props: PageContainerProps): ReactElement {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Box
        sx={{
          bgcolor: "background.default",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Box sx={{ width: { xs: "95%", md: "80%" } }}>{props.children}</Box>
      </Box>
    </>
  );
}

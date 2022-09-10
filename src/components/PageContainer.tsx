import { Box } from "@mui/material";
import { ReactElement, ReactNode } from "react";

type PageContainerProps = {
  children?: ReactNode;
};
export default function PageContainer(props: PageContainerProps): ReactElement {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ width: { xs: "95%", md: "70%" } }}>{props.children}</Box>
    </Box>
  );
}

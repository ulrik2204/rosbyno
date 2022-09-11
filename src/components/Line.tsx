import { Box } from "@mui/material";
import { ReactNode } from "react";

type LineProps = {
  children?: ReactNode;
};
export default function Line(props: LineProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5em" }}>
      <Box sx={{ width: "3em", height: "0.2em", backgroundColor: "primary.main" }}></Box>
      {props.children}
    </Box>
  );
}

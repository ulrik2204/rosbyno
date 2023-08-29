import { Box, Typography, Link } from "@mui/material";
import Image from "next/image";

type IconLinkProps = {
  src: string;
  href: string;
  text?: string;
};
export default function IconLink(props: IconLinkProps) {
  return (
    <Box width="48px">
      <Link href={props.href} style={{ textDecoration: "none", color: "inherit" }}>
        <Box
          sx={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            width: "48px",
          }}
        >
          <Image src={props.src} alt="" objectFit="contain" layout="fixed" width={48} height={48} />
          <Typography>{props.text}</Typography>
        </Box>
      </Link>
    </Box>
  );
}

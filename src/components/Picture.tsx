import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import Image, { ImageProps } from "next/image";
import { ReactElement } from "react";

type PictureProps = {
  src: string;
  alt: string;
  sx?: SxProps<Theme>;
  objectFit?: ImageProps["objectFit"];
  className?: string;
};
export default function Picture(props: PictureProps): ReactElement {
  return (
    <Box
      sx={[{ position: "relative" }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
      className={props.className}
    >
      <Image
        src={props.src}
        alt={props.alt}
        layout="fill"
        objectFit={props.objectFit ?? "contain"}
      />
    </Box>
  );
}

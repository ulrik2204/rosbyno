import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import Image, { ImageProps } from "next/image";
import { ReactElement } from "react";

type PictureProps = ImageProps & {
  sx?: SxProps<Theme>;
  className?: string;
  imageProps?: ImageProps;
};
export default function Picture(props: PictureProps): ReactElement {
  return (
    <Box
      sx={[{ position: "relative" }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
      className={props.className}
    >
      <Image layout="fill" objectFit="contain" {...props} />
    </Box>
  );
}

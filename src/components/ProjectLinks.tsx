import { Box, Typography } from "@mui/material";

type ProjectLinksProps = {
  prependText?: string;
  appendText?: string;
  githubLink1?: string;
  githubLinkBackend?: string;
  projectLink?: string;
};
export default function ProjectLinks(props: ProjectLinksProps) {
  return (
    <Box>
      <Typography variant="body1">
        {props.prependText ?? ""}
        {props.projectLink && (
          <>
            See the project <a href={props.projectLink}>here</a>.{" "}
          </>
        )}
        {props.githubLink1 && (
          <>
            Code is on{" "}
            {!props.githubLinkBackend ? (
              <>
                <a href={props.githubLink1}>GitHub</a>
                {"."}
              </>
            ) : (
              <>
                GitHub, for both the <a href={props.githubLink1}>frontend</a> and{" "}
                <a href={props.githubLinkBackend}>backend</a>.
              </>
            )}
          </>
        )}
        {props.appendText ?? ""}
      </Typography>
    </Box>
  );
}

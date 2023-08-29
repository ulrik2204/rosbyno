import { Box, Typography } from "@mui/material";
import ProjectsTimeline, { ProjectItem } from "../components/ProjectsTimeline";

const items: ProjectItem[] = [];

export default function Work() {
  return (
    <Box>
      <Typography variant="h1" sx={{ marginTop: "4rem", marginBottom: "2rem" }}>
        My experience
      </Typography>
      <ProjectsTimeline items={items} />
    </Box>
  );
}

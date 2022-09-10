import { Box, Typography } from "@mui/material";
import type { NextPage } from "next";
import Line from "../components/Line";
import Picture from "../components/Picture";
import { ThreeHeader } from "../components/ThreeHeader";

/**
 * Ideas: Button to a projects page
 * Some notes at the front page: ideals
 * Some contact buttons (github, linkedin...) at the frontpage
 * Three.js at the frontpage
 */

const Home: NextPage = () => {
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "start", justifyContent: "space-around" }}>
        <Box sx={{ marginTop: "8em" }}>
          <Line>
            <Typography variant="h3">Hello</Typography>
          </Line>
          <Typography variant="h1">Ulrik Røsby</Typography>
          <Typography variant="h2">Software Engineer</Typography>
        </Box>
        <Picture
          src="/images/ulrik_seawiz_uten_bg.png"
          alt="Picture of me"
          sx={{ width: 400, height: 550, float: "right" }}
        />
      </Box>
      <ThreeHeader />
    </div>
  );
};

export default Home;

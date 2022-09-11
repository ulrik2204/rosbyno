import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
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
    <Box>
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          bgcolor: "secondary.main",
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-around",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ marginTop: "8em" }}>
          <Line>
            <Typography variant="h3">Hello</Typography>
          </Line>
          <Typography variant="h1">Ulrik Røsby</Typography>
          <Typography variant="h2" marginTop="0.3em">
            Software Engineer
          </Typography>
          <br />
          <Typography variant="h3" sx={{ marginTop: "0.5em", text: "wrap", width: { md: 500 } }}>
            &ldquo;There&apos;s nothing like the smell of Chai Tea in the morning, it smells like
            quality code&rdquo;
          </Typography>
          <Link href="/projects">
            <a>
              <Button variant="contained" sx={{ marginTop: "3em", padding: "1em 2em" }}>
                My portfolio
              </Button>
            </a>
          </Link>
        </Box>
        <Picture
          priority
          src="/images/ulrik.png"
          alt="Picture of me"
          sx={{
            width: 400,
            height: 550,
            float: "right",
          }}
        />
      </Box>
      <ThreeHeader />
    </Box>
  );
};

export default Home;

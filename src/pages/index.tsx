import { Box, Button, Typography, IconButton } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import IconLink from "../components/IconLink";
import Line from "../components/Line";
import Picture from "../components/Picture";
import WaveAnimation from "../components/WaveAnimation";

const Home: NextPage = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: { xs: "column-reverse", lg: "row" },
          justifyContent: { xs: "unset", lg: "space-around" },
          alignItems: { xs: "center", lg: "unset" },
          position: "relative",
        }}
      >
        <Box sx={{ marginTop: { xs: "1em", lg: "5em" } }}>
          <Line>
            <Typography variant="h3">Hello</Typography>
          </Line>
          <Typography variant="h1">Ulrik Røsby</Typography>
          <Typography variant="h3">Software Engineer</Typography>
          <br />
          <Typography
            variant="h4"
            sx={{
              fontStyle: "italic",
              marginTop: "0.3em",
              width: "90%",
              wordWrap: "break-word",
            }}
          >
            &ldquo;There&apos;s nothing like the smell of Chai Tea in the morning, it smells like
            quality code&rdquo;
          </Typography>
          <Box
            sx={{
              marginTop: { xs: "2em" },
              display: "flex",
              flexFlow: { xs: "column", row: "row" },
              justifyContent: "space-between",
              height: "11rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "space-between",
                width: "22rem",
              }}
            >
              <Link href="/projects">
                <a>
                  <Button variant="contained" sx={{ padding: "1em 2em" }} startIcon="🖼️">
                    Portfolio
                  </Button>
                </a>
              </Link>
              <Link href="/experience">
                <a>
                  <Button variant="contained" sx={{ padding: "1em 2em" }} startIcon="👷‍♂️">
                    Experience
                  </Button>
                </a>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "10rem",
              }}
            >
              <IconLink text="GitHub" src="/logos/github.png" href="https://github.com/ulrik2204" />
              <IconLink
                text="LinkedIn"
                src="/logos/linkedin.png"
                href="https://linkedin.com/in/ulrik-røsby-a2b1251b8"
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "auto",
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
          }}
        >
          <Picture
            priority
            src="/images/ulrik.png"
            alt="Picture of me"
            sx={{
              width: { xs: 250, lg: 450 },
              height: { xs: 250, lg: 450 },
              float: { xs: "left", lg: "right" },
              backgroundColor: { xs: "secondary.main" },
              borderRadius: "50%",
              overflow: "hidden",
            }}
          />
        </Box>
      </Box>
      <WaveAnimation />
    </Box>
  );
};

export default Home;

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
          // height: { xs: "40em", lg: "unset" },
        }}
      >
        <Box sx={{ marginTop: { xs: "2em", lg: "5em" } }}>
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
              marginTop: "2em",
              display: "flex",
              flexFlow: { xs: "column", row: "row" },
              justifyContent: "space-between",
              height: "9rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexFlow: "row",
                justifyContent: "space-between",
                width: "18rem",
              }}
            >
              <Link href="/projects">
                <a>
                  <Button variant="contained" sx={{ padding: "0.5em 1em" }} startIcon="📘">
                    Portfolio
                  </Button>
                </a>
              </Link>
              <Link href="/experience">
                <a>
                  <Button variant="contained" sx={{ padding: "0.5em 1em" }} startIcon="👷‍♂️">
                    Experience
                  </Button>
                </a>
              </Link>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "8rem",
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
            height: { xs: "100%", lg: "auto" },
            width: { xs: "100%", lg: "unset" },
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: { xs: "1em", lg: "unset" },
          }}
        >
          <Picture
            priority
            src="/images/ulrik.png"
            alt="Picture of me"
            sx={{
              width: { xs: 180, lg: 420 },
              height: { xs: 180, lg: 420 },
              float: { xs: "unset", lg: "right" },
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

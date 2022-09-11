import { Box, Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import IconLink from "../components/IconLink";
import Line from "../components/Line";
import Picture from "../components/Picture";
import { ThreeHeader } from "../components/ThreeHeader";

const Home: NextPage = () => {
  return (
    <Box>
      <Box
        sx={{
          display: { sm: "none", lg: "block" },
          position: "absolute",
          height: { xs: "0%", lg: "100%" },
          bgcolor: "secondary.main",
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          height: { xs: 700, lg: "100%" },
          flexFlow: { xs: "column-reverse", lg: "row" },
          justifyContent: { xs: "unset", lg: "space-around" },
          alignItems: { xs: "center", lg: "unset" },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box sx={{ marginTop: { xs: "1em", lg: "8em" } }}>
          <Line>
            <Typography variant="h3">Hello</Typography>
          </Line>
          <Typography variant="h1">Ulrik Røsby</Typography>
          <Typography variant="h2" marginTop="0.3em">
            Software Engineer
          </Typography>
          <br />
          <Typography
            variant="h3"
            sx={{
              fontStyle: "italic",
              marginTop: "0.5em",
              text: "wrap",
              width: { md: 500 },
            }}
          >
            &ldquo;There&apos;s nothing like the smell of Chai Tea in the morning, it smells like
            quality code&rdquo;
          </Typography>
          <Box
            sx={{
              marginTop: { xs: "4em", lg: 0 },
              display: "flex",
              flexFlow: { xs: "column", md: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "left", lg: "center" },
              height: "11rem",
            }}
          >
            <Link href="/projects">
              <a>
                <Button variant="contained" sx={{ padding: "1em 2em" }}>
                  My portfolio
                </Button>
              </a>
            </Link>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 180,
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
        <Picture
          priority
          src="/images/ulrik.png"
          alt="Picture of me"
          sx={{
            width: { xs: "100vw", lg: 400 },
            height: { xs: 300, lg: 550 },
            float: { xs: "left", lg: "right" },
            backgroundColor: { xs: "secondary.main", lg: "unset" },
          }}
        />
      </Box>
      <ThreeHeader />
    </Box>
  );
};

export default Home;

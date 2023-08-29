import { Box, Typography } from "@mui/material";
import { ProjectItem } from "../components/ProjectsTimeline";
import ProjectLinks from "../components/ProjectLinks";
import dynamic from "next/dynamic";

const ProjectsTimeline = dynamic(() => import("../components/ProjectsTimeline"), { ssr: false });
// TODO: Fix bildefarge på cogito
// TODO: Kundestyrt, Vegfind, Abs?

const items: ProjectItem[] = [
  {
    timeframe: "January - June 2022",
    title: "Emojify",
    description: `I was a project leader in Cogito NTNU for the project "Emojify". In this project
    a group og 4 students created a program that suggested emojis to sentences. This was done using
    natural language processing (NLP) techniques. We explored classical classification, LSTM networks and BERT.`,
    imageUrl: "/logos/cogito.png",
    children: <ProjectLinks githubLink1="https://github.com/CogitoNTNU/emojify" />,
  },
  {
    timeframe: "September - November 2022",
    title: "Living Painting",
    description: `I was a project participant in Cogito NTNU for the project "Living Painting". 
      In this project a group of 8 students created program that could produce a living 
      painting that moved according to the person looking at it. This was achieved using 
      a combination of Style Transfer, DeepFake and Face detection technologies. I was responsible
      for the Style Transfer part of the project.
      `,
    imageUrl: "/logos/cogito.png",
    children: (
      <Box>
        <Typography variant="body1">
          The Style Transfer part of the project was presented to the prime minister of Norway Jonas
          Gahr Støre in 2023 as part of a private event to talk about the future of digitalization
          and AI in Norway. The project is talked about in{" "}
          <a href="https://www.nrk.no/trondelag/regjeringen-legger-fram-nasjonal-digitaliseringsstrategi-for-kunstig-intelligens-pa-ntnu-i-trondheim-1.16435076">
            this
          </a>{" "}
          article.
        </Typography>
        <ProjectLinks githubLink1="https://github.com/CogitoNTNU/living_painting" />
      </Box>
    ),
  },
  {
    timeframe: "January - June 2022",
    title: "Battlegoose",
    description:
      "Created a LibGDX game with 5 other people in the subject Software Architecture at NTNU.",
    imageUrl: "https://battlegoo.se/goose.png",
    children: (
      <ProjectLinks
        githubLink1="https://github.com/dotClique/battlegoose"
        projectLink="https://battlegoo.se/"
      />
    ),
  },
  {
    timeframe: "June - August 2021",
    title: "ComboStats",
    description:
      "During the summer 2022, I worked on a project alone to estimate the " +
      "probability of drawing items in a population by drawing a lot of samples. " +
      "This project refined by skills in TypeScript and React.",
    imageUrl: "https://combostats.rosby.no/ComboStatsRoundedLogo.png",
    children: (
      <ProjectLinks
        githubLink1="https://github.com/ulrik2204/ComboStats"
        projectLink="https://combostats.rosby.no/"
      />
    ),
  },
];

export default function Projects() {
  return (
    <Box>
      <Typography variant="h1" sx={{ marginTop: "4rem", marginBottom: "2rem" }}>
        My projects
      </Typography>
      <ProjectsTimeline items={items} />
    </Box>
  );
}

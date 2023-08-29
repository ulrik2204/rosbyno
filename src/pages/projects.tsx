import { Box, Typography } from "@mui/material";
import { ProjectItem } from "../components/ProjectsTimeline";
import ProjectLinks from "../components/ProjectLinks";
import dynamic from "next/dynamic";

const ProjectsTimeline = dynamic(() => import("../components/ProjectsTimeline"), { ssr: false });

const items: ProjectItem[] = [
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
    timeframe: "January 2022 - ongoing",
    title: "SeaWiz",
    description:
      "Currently working in the startup SeaWiz to create a platform " +
      "that collects and analyzes data in the shipping industry. " +
      "I have worked on scraping schedules and presenting them in a gRPC API, " +
      "and implementing website designs.",
    imageUrl: "/images/sw_full.png",
    children: <ProjectLinks projectLink="https://seawiz.io" />,
  },
  {
    timeframe: "October - November 2021",
    title: "FilmFlokk",
    description:
      "During late autumn of 2021, I worked on bigger group project for creating and signing up for movie events in groups." +
      "This project introduced me to working on a VM. The project used TS React and Nest.js. I also learned GraphQL, Apollo, Cypress, " +
      "docker-compose, and NGINX. In addition a React Native mobile frontend using Expo was built for the app as well.",
    imageUrl: "/logos/filmflokk.svg",
    children: (
      <Box>
        The code for the{" "}
        <a href="https://github.com/dotClique/project3-it2810">web application&apos;s</a> and the{" "}
        <a href="https://github.com/dotClique/project4-it2810">React Native mobile frontend</a> are
        on GitHub.
      </Box>
    ),
  },
  {
    timeframe: "August - October 2021",
    title: "Web development projects",
    description:
      "During autumn of 2021, I worked on several web development projects, " +
      "some alone and some in a group. " +
      "These projects refined my skills in pure JavaScript, TypeScript and React.",
    imageUrl: "/logos/gitlab.png",
    children: (
      <Box>
        The first project was an individual pure JS project and is{" "}
        <a href="https://project1-it2810.rosby.no">deployed</a> and on{" "}
        <a href="https://github.com/ulrik2204/project1-it2810">GitHub</a>.
        <br />
        The second project was a group project pure JS project and is{" "}
        <a href="https://project2-it2810.rosby.no">deployed</a> and on{" "}
        <a href="https://github.com/dotClique/project2-it2810">github</a>.
        <br />
      </Box>
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
  {
    timeframe: "January - June 2021",
    title: "Dine",
    description:
      "Created a website to publish and to sign up for dinner events in the subject Software Engineering at NTNU. " +
      "Here, the group focused on using Scrum and agile methods. In this subject I also learned React and Django.",
    imageUrl: "/images/dine.png",
    children: (
      <ProjectLinks
        githubLink1="https://github.com/ulrik2204/dine-frontend"
        githubLinkBackend="https://github.com/ulrik2204/dine-backend"
        projectLink="https://dine.rosby.no/"
      />
    ),
  },
  {
    timeframe: "August - December 2020",
    title: "Bibtek",
    description:
      "Created a JAX-RS Jersey JavaFX application to keep track of your books and their status (read, reading, want to read, abondoned). " +
      "This project also focused on Scrum, as well as learning more advanced programming techniques.",
    imageUrl: "/images/bibtek_round.png",
    children: <ProjectLinks githubLink1="https://github.com/ulrik2204/bibtek" />,
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

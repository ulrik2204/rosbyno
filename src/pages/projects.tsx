import { Box, Link, Typography } from "@mui/material";
import ProjectsTimeline, { ProjectItem } from "../components/ProjectsTimeline";

const items: ProjectItem[] = [
  {
    timeframe: "June - August 2022",
    title: "NAV IT Internship",
    description:
      "Worked on a project with 3 people to create a website for bulk " +
      "extraction of contact info from the offical registers " +
      "KRR (Kontakt- og Reservasjonsregisteret) and PDL (Persondataløsningen)",
    imageUrl: "https://www.steinkjerleksikonet.no/img/vis_gen.php?tbl=bilde&fil=innhold&id=4430",
    children: (
      <ProjectLinks
        githubLink1="https://github.com/navikt/bulk-frontend"
        githubLinkBackend="https://github.com/navikt/bulk-backend"
      />
    ),
  },
  {
    timeframe: "January - June 2022",
    title: "Battlegoose",
    titleUrl: "https://battlegoo.se/",
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
    titleUrl: "https://seawiz.io",
    description:
      "Currently working in the startup SeaWiz to create a platform " +
      "that collects and analyzes data in the shipping industry. " +
      "I have worked on scraping schedules and presenting them in a gRPC API, " +
      "and implementing website designs.",
    imageUrl: "/images/sw_full.png",
    children: <ProjectLinks projectLink="https://seawiz.io" />,
  },
  {
    timeframe: "June - August 2021",
    title: "ComboStats",
    titleUrl: "https://combostats.rosby.no",
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
    titleUrl: "https://dine.rosby.no/",
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
    titleUrl: "https://github.com/ulrik2204/bibtek",
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

type ProjectLinksProps = {
  prependText?: string;
  appendText?: string;
  githubLink1?: string;
  githubLinkBackend?: string;
  projectLink?: string;
};
function ProjectLinks(props: ProjectLinksProps) {
  return (
    <Box>
      <Typography variant="body1">
        {props.prependText ?? ""}
        {props.projectLink && (
          <>
            See the project <Link href={props.projectLink}>here</Link>.{" "}
          </>
        )}
        {props.githubLink1 && (
          <>
            Code is on{" "}
            {!props.githubLinkBackend ? (
              <Link href={props.githubLink1}>GitHub</Link>
            ) : (
              <>
                GitHub, for both the <Link href={props.githubLink1}>frontend</Link> and{" "}
                <Link href={props.githubLinkBackend}>backend</Link>.
              </>
            )}
          </>
        )}
        {props.appendText ?? ""}
      </Typography>
    </Box>
  );
}

import { Box, Typography } from "@mui/material";
import ProjectsTimeline, { ProjectItem } from "../components/ProjectsTimeline";
import ProjectLinks from "../components/ProjectLinks";

const items: ProjectItem[] = [
  {
    timeframe: "June - August 2023",
    title: "Oda Internship",
    description:
      "Worked on a project with 7 other people where the goal was to improve product data quality " +
      "at Oda using information extracted from images.",
    imageUrl: "/logos/oda.png",
  },
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
    timeframe: "August - December 2021, 2022, 2023",
    title: "Teacher's assistant",
    description: `
      I have often taken a position as a teacher's assistant in courses at 
      NTNU during the fall semester.
      In the fall semester of 2021 I was a teacher's assistant in the course 
      TDT4109 Introduction to Information Technology. Here I was responsible for grading
      assignments and answering questions from students.
      In the fall semester of 2022 I was teacher's assistant in the course IT2810 Web Development
      where I was responsible for answering questions from students about React, TypeScript, GraphQL 
      and setup of the development environment.
      `,
    imageUrl: "/logos/ntnu.png",
    children: (
      <ProjectLinks
        githubLink1="https://github.com/navikt/bulk-frontend"
        githubLinkBackend="https://github.com/navikt/bulk-backend"
      />
    ),
  },
];

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

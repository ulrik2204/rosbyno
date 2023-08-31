import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import { ProjectItem } from "../components/ProjectsTimeline";
import ProjectLinks from "../components/ProjectLinks";

const ProjectsTimeline = dynamic(() => import("../components/ProjectsTimeline"), { ssr: false });

const items: ProjectItem[] = [
  {
    timeframe: "Jun - Aug 2023",
    title: "Oda Internship",
    description: `Worked on a project with 7 other people where the goal was to improve product data quality
      at Oda using information extracted from product images. Here we focused on working in a cross-functional
      team of designers, data scientists and software engineers. Although my role was primarily as a software 
      developer, we also did a Google Design Sprint to create a prototype of the product, did process
      modeling using BPMN diagrams and created an application which integrated with their already existing 
      system to provide suggestion for product data based on images.
      `,
    imageUrl: "/logos/oda.png",
    children: (
      <Box>
        See my <a href="https://www.linkedin.com/in/ulrik-r%C3%B8sby-a2b1251b8/">LinkedIn</a>{" "}
        profile recommendations from this internship.
      </Box>
    ),
  },
  {
    timeframe: "Jun - Aug 2022",
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
    timeframe: "Jan 2022 - present",
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
    timeframe: "Aug - Dec 2021, 2022, 2023",
    title: "Teacher's assistant",
    description: `
      I have often taken a position as a teacher's assistant in courses at 
      NTNU during the fall semester.
      In the fall semester of 2021 I was a teacher's assistant in the course 
      TDT4109 Information Technology, Introduction. Here I was responsible for grading
      assignments and answering questions from students.
      In the fall semester of 2022 I was teacher's assistant in the course IT2810 Web Development
      where I was responsible for answering questions from students about React, TypeScript, GraphQL 
      and setup of the development environment. I continued as a teacher's assistant in IT2810 in
      the fall semester of 2023.
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

export default function Experience() {
  return (
    <Box>
      <Typography variant="h1" sx={{ marginTop: "4rem", marginBottom: "2rem" }}>
        My experience
      </Typography>
      <ProjectsTimeline items={items} />
    </Box>
  );
}

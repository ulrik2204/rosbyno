import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ReactElement, ReactNode, useMemo } from "react";
import { Chrono } from "react-chrono";
import { Theme } from "react-chrono/dist/models/Theme";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";
import { TimelineMode } from "react-chrono/dist/models/TimelineModel";

type ProjectProps = {
  description?: string;
  children?: ReactNode;
};

export type ProjectItem = {
  title: string;
  description: string;
  timeframe: string;
  imageUrl: string;
  subtitle?: string;
  children?: ReactNode;
};

type ProjectTimelineProps = {
  items: ProjectItem[];
};

export default function ProjectsTimeline(props: ProjectTimelineProps): ReactElement {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const mode: TimelineMode = isDesktop ? "VERTICAL_ALTERNATING" : "VERTICAL";

  const [chronoItems, timelineContent] = useMemo(() => {
    const chronoItems = props.items.map((item) => {
      return {
        title: item.timeframe,
        cardSubtitle: item.subtitle,
        cardTitle: item.title,
        media: {
          type: "IMAGE",
          name: `Image for ${item.title}`,
          source: {
            url: item.imageUrl,
          },
        },
      } as TimelineItemModel;
    });
    const timelineContent: ProjectProps[] = props.items.map((item) => ({
      description: item.description,
      children: item.children,
    }));
    return [chronoItems, timelineContent];
  }, [props.items]);

  const chronoTheme: Theme = {
    primary: "black",
    secondary: theme.palette.primary.main,
    cardBgColor: theme.palette.secondary.main,
    titleColor: "black",
    cardTitleColor: "black",
    textColor: "black",
    titleColorActive: "blac",
  };

  return (
    <Box>
      <Chrono
        theme={chronoTheme}
        items={chronoItems}
        scrollable
        mediaSettings={{ imageFit: "contain" }}
        mediaHeight={300}
        mode={mode}
        hideControls={true}
      >
        {timelineContent.map((projectProps, index) => (
          <Project key={index} {...projectProps} />
        ))}
      </Chrono>
    </Box>
  );
}

function Project(props: ProjectProps) {
  return (
    <Box width="100%">
      <Typography variant="body1">{props.description}</Typography>
      {props.children}
    </Box>
  );
}

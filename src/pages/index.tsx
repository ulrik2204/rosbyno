import { Button, Typography } from "@mui/material";
import type { NextPage } from "next";
import Line from "../components/Line";
import Picture from "../components/Picture";

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-3xl font-bold underline">Some text</div>
      <Picture
        src="/images/seawiz_uten_bg.png"
        alt="Picture of me"
        sx={{ width: 200, height: 200 }}
      />
      <Line>Hello</Line>
      <Typography variant="h1">Ulrik Røsby</Typography>
      <Button onClick={() => console.log("Button click")} variant="contained" color="primary">
        Hello
      </Button>
    </div>
  );
};

export default Home;

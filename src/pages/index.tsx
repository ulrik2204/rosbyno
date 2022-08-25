import { Button } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <div className="text-3xl font-bold underline">Some text</div>
      <Button onClick={() => console.log("Button click")} variant="contained" color="primary">
        Hello
      </Button>
    </div>
  );
};

export default Home;

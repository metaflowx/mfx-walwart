"use client"
import { Box, Grid2 } from "@mui/material";
import Cardcmp from "../dashboard/cardcmp";
import Clicktoback from "../profile/clicktoback";
import DropdownList from "./dropdownList";
import taskListData from "@/app/customHooks/taskList";


const ScoreCenter = () => {
const {taskList}=taskListData()

  return (
    <>
      <Clicktoback href={"/dashboard/invest"} title={"Scoring Center"} />
      <Box py={2}>
        <DropdownList />
      </Box>
      <Grid2 container spacing={2}>
        {taskList.map((product, index) => {
          return (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Cardcmp product={product} />
            </Grid2>
          );
        })}
      </Grid2>
    </>
  );
};

export default ScoreCenter;

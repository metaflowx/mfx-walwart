"use client"
import { Box, Grid2 } from "@mui/material";
import RatingCard from "../dashboard/RatingCard";
import Clicktoback from "../profile/clicktoback";
import DropdownList from "./dropdownList";
import taskListData from "@/app/customHooks/taskList";
import CommonCardSkeltonLoader from "@/components/ui/CommonCardSkeltonLoader";


const ScoreCenter = () => {
const {taskList,loading}=taskListData()

  return (
    <>
      <Clicktoback href={"/dashboard/invest"} title={"Scoring Center"} />
      {/* <Box py={2}>
        <DropdownList />
      </Box> */}
      <Grid2 container spacing={2} mt={3} >
      {loading ? (
        Array.from(new Array(6)).map((_, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
          <CommonCardSkeltonLoader />
        </Grid2>
        
        ))
      ) : (
        <>
          {taskList.map((product, index) => {
          return (
            <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <RatingCard product={product} />
            </Grid2>
          );
        })}
        </>
      )}
        
      </Grid2>
    </>
  );
};

export default ScoreCenter;

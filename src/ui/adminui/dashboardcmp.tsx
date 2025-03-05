"use client";
import { Box, Grid2, Typography } from "@mui/material";
import Sidebardb from "./sidebardb";
import Dsboard from "./dsboard";
import DashboardHeader from "../shared/dashboardHeader";

const Dashboardcmp = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff" }}>
        <Box
       
        >
          <Dsboard />
        </Box>
      </Box>
    </>
  );
};

export default Dashboardcmp;

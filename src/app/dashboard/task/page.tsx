"use client";
import React from "react";
import PieChartComp from "./piechart";
import { Box, Grid2, Typography } from "@mui/material";
import TaskCard from "./piechart/TaskCard";
import TaskDashboard from "./piechart/TaskDashboard";
import LevelCard from "./piechart/LevelCard";

export default function page() {
  const dataList = [
    {
      title: "Scoring Income",
      bg: "bg-[#FFC325]",
    },
    {
      title: "Recommendation Revenue",
      bg: "bg-[#D31F85]",
    },
    {
      title: "Investment Income",
      bg: "bg-[#0071CE]",
    },
  ];
  const mockData = {
    totalTeamMembers: 0.00,
    teamTotalTopUp: 0.00,
    addedToday: 0.00,
    levels: {
      1: { totalHeadcount: 0.00, numberOfActive: 0.00, teamTopUp: 0.00, totalReturn: 0.00, todaysEarnings: 0.00 },
      2: { totalHeadcount: 0.00, numberOfActive: 0.00, teamTopUp: 0.00, totalReturn: 0.00, todaysEarnings: 0.00 },
      3: { totalHeadcount: 0.00, numberOfActive: 0.00, teamTopUp: 0.00, totalReturn: 0.00, todaysEarnings: 0.00 },
      4: { totalHeadcount: 0.00, numberOfActive: 0.00, teamTopUp: 0.00, totalReturn: 0.00, todaysEarnings: 0.00 },
      5: { totalHeadcount: 0.00, numberOfActive: 0.00, teamTopUp: 0.00, totalReturn: 0.00, todaysEarnings: 0.00 },
      6: { totalHeadcount: 0.00, numberOfActive: 0.00, teamTopUp: 0.00, totalReturn: 0.00, todaysEarnings: 0.00 },
    },
  };
  return (
    <div  >
        <Box sx={{
            background:"#F7F7F7",
            borderRadius:"24px",
            padding:"30px"
        }} >

      <h3 className="text-center text-[#0071CE] text-[20px] sm:text-[30px] md:text-[50px] font-[700] ">
        Benefit Analysis
      </h3>
      <PieChartComp />

      <Grid2 container spacing={2} mt={1}>
        {dataList.map((item, index) => {
          return (
            <Grid2 key={index} size={{ xs: 6, sm: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                <div
                  className={`${item.bg} rounded-full w-[44px] h-[44px] `}
                ></div>
                <h3 className="text-black text-[24px] font-[400] pl-2">
                  {item.title}
                </h3>
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
      <TaskCard />
        </Box>
      <TaskDashboard />
      <Typography variant="h5" sx={{ mb: 3, color: "#0071CE",fontSize:"40px",fontWeight:700 }}>
          Added today : {mockData.addedToday.toFixed(2)}
        </Typography>

        <Grid2 container spacing={3}>
          {Object.entries(mockData.levels).map(([level, data]) => (
            <Grid2 size={{xs:12,sm:6,md:4}}  key={level}>
              <LevelCard level={parseInt(level)} data={data} />
            </Grid2>
          ))}
        </Grid2>
    </div>
  );
}

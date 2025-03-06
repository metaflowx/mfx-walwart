"use client";
import React, { useEffect, useState } from "react";
import PieChartComp from "./piechart";
import { Box, Grid2, Typography } from "@mui/material";
import TaskCard from "./piechart/TaskCard";
import TaskDashboard from "./piechart/TaskDashboard";
import LevelCard from "./piechart/LevelCard";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import useRefferalStats from "@/app/customHooks/useRefferalStats";

export default function page() {
  const {referralStats} =useRefferalStats()
  const[isLoading,setIsLoading]=useState(true)
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
        background: "#F7F7F7",
        borderRadius: "24px",
        padding: "30px"
      }} >

        <h3 className="text-center text-[#0071CE] text-[20px] sm:text-[30px] md:text-[50px] font-[700] ">
          Benefit Analysis
        </h3>
        <PieChartComp />

        <Grid2 container spacing={2} mt={1}>
          {dataList.map((item, index) => {
            return (
              <Grid2 key={index} size={{ lg:4, md:4,sm: 12, xs: 12,  }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div
                    className={`${item.bg} rounded-full w-[30px] h-[30px] `}
                  ></div>
                  <h3 className=" text-black text-[18px] sm:text-[20px]  font-[400] pl-2">
                    {item.title}
                  </h3>
                </Box>
              </Grid2>
            );
          })}
        </Grid2>
        <TaskCard referralData={referralStats} />
      </Box>
      <TaskDashboard referralData={referralStats} />
      <h5 className="mb-3 text-[#0071CE] text-[18px] sm:text-[40px] font-[700] " >
        Added today : {referralStats?.totalTodayEarning || 0}
      </h5>

      <Grid2 container spacing={3}>
       
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} >
            <LevelCard  data={referralStats?.levelStats?.level1} level="1" />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} >
            <LevelCard  data={referralStats?.levelStats?.level2} level="2" />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} >
            <LevelCard  data={referralStats?.levelStats?.level3} level="3" />
          </Grid2>
        
      </Grid2>
    </div>
  );
}

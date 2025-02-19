"use client";
import React from "react";
import PieChartComp from "./piechart";
import { Box, Grid2 } from "@mui/material";
import TaskCard from "./piechart/TaskCard";

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
  return (
    <div>
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
    </div>
  );
}

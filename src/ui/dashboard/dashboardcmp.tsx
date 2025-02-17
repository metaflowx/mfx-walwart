"use client";
import { Box } from "@mui/material";
import Hero from "./Hero";
import Trending from "./Trending";
import Products from "./Products";
import QuickActions from "./QuickActions";




const Dashboardcmp = () => {
  return (
    <>
      <Box >
     <Hero />
     <QuickActions />
     <Trending />
     <Products />
    
      </Box>
    </>
  );
};

export default Dashboardcmp;

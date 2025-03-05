"use client";
import { Box } from "@mui/material";
import Hero from "./Hero";
import Trending from "./Trending";
import Products from "./Products";
import QuickActions from "./QuickActions";
import MemberList from "./MemberList";




const Dashboardcmp = () => {
  return (
    <>
      <Box >
      <MemberList />
     <Hero />
     <QuickActions />
     {/* <Trending /> */}
     <Products />
   
    
      </Box>
    </>
  );
};

export default Dashboardcmp;

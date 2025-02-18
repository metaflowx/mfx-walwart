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
     <Hero />
     <QuickActions />
     <Trending />
     <Products />
     <MemberList />
    
      </Box>
    </>
  );
};

export default Dashboardcmp;

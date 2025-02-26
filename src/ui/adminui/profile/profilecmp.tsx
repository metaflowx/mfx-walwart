"use client"
import DashboardHeader from "@/ui/shared/dashboardHeader";
import { Box, Grid2, Typography } from "@mui/material";
import Sidebardb from "../sidebardb";
import Dsboard from "../dsboard";
import Invest from "./profile";
 
 


const Profilecmp = () => {
    return (
        <>
            <Box
                sx={{ backgroundColor: '#fff' }}>
                 <Invest/>
            </Box>


        </>
    )
}

export default Profilecmp;
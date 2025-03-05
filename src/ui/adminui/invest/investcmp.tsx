"use client"
import DashboardHeader from "@/ui/shared/dashboardHeader";
import { Box, Grid2, Typography } from "@mui/material";
import Sidebardb from "../sidebardb";
import Invest from "./invest";
 
 


const Investcmp = () => {
    return (
        <>
            <Box
                sx={{ backgroundColor: '#fff' }}>
               
                <Invest/>
            </Box>


        </>
    )
}

export default Investcmp;
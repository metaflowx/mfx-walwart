"use client"
import DashboardHeader from "@/ui/shared/dashboardHeader";
import { Box, Grid2, Typography } from "@mui/material";
import Sidebardb from "../sidebardb";
import Referral from "./referral";
 
 
 


const Referralcmp = () => {
    return (
        <>
            <Box
                sx={{ backgroundColor: '#fff' }}>
                  <Referral />
            </Box>


        </>
    )
}

export default Referralcmp;
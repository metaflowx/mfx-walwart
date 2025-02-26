"use client"
import DashboardHeader from "@/ui/shared/dashboardHeader";
import { Box, Grid2, Typography } from "@mui/material";
import Sidebardb from "../sidebardb";
import User from "./user";
 
 


const Usercmp = () => {
    return (
        <>
            <Box
                sx={{ backgroundColor: '#fff' }}>
               <User/>
            </Box>


        </>
    )
}

export default Usercmp;
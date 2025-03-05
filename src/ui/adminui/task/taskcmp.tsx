"use client"
import DashboardHeader from "@/ui/shared/dashboardHeader";
import { Box, Grid2, Typography } from "@mui/material";
import Sidebardb from "../sidebardb";
import Dsboard from "../dsboard";
import Task from "./task";
 


const Taskcmp = () => {
    return (
        <>
            <Box
                sx={{ backgroundColor: '#fff' }}>
               
               <Task />
            </Box>


        </>
    )
}

export default Taskcmp;
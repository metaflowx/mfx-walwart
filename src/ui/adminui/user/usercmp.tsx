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
                <DashboardHeader />
                <Grid2 container spacing={0}>
                    <Grid2 size={{ lg: 2, md: 2.5, sm: 12, xs: 12 }}>
                        <Box sx={{ '@media(max-width : 900px)': { display: 'none' } }}>
                            <Sidebardb />
                        </Box>

                    </Grid2>
                    <Grid2 size={{ lg: 10, md: 9.5, sm: 12, xs: 12 }}>
                        <Box sx={{ marginLeft: 1, '@media(max-width : 900px)': { marginLeft: 0 } }}>
                            <User/>
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>


        </>
    )
}

export default Usercmp;
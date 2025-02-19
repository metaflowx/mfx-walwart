"use client";

import { Card, CardMedia, Box, Typography } from "@mui/material";
import { Calendar } from "lucide-react";



interface HeaderProps {
  totalTeamMembers: number;
  teamTotalTopUp: number;
}

export default function TaskDashboard() {
  return (
    <Card sx={{ display: "flex", mb: 4, overflow: "hidden",mt:4,border: "1px solid #DCDCEB",borderRadius:"24px",boxShadow:"none" }}  >
      <CardMedia
        component="img"
        sx={{ width: "40%", objectFit: "contain" }}
        image="/images/task/vrimage.png"
        alt="VR Technology"
      />
      <Box sx={{ p: 3, flexGrow: 1 }}>
        
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" color="#000000" fontSize="24px" fontWeight={400} >Select Query Date</Typography>
            <Calendar />
          </Box>
      
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography color="#000000" fontSize="24px" fontWeight={400}>Total number of team members :</Typography>
          <Typography color="#000000" fontSize="24px" fontWeight={700}>123</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#000000" fontSize="24px" fontWeight={400}>Team total top up</Typography>
          <Typography color="#000000" fontSize="24px" fontWeight={700}>230 USDT</Typography>
        </Box>
      </Box>
    </Card>
  );
}
"use client";

import { Card, CardMedia, Box, Typography, Dialog, DialogContent } from "@mui/material";
import { Calendar } from "lucide-react";
import CalenderModal from "./CalenderModal";
import { useState } from "react";



interface HeaderProps {
  totalTeamMembers: number;
  teamTotalTopUp: number;
}

export default function TaskDashboard({referralData}:{referralData:any}) {
  const [openCalender,setOpenCalender]=useState(false)
  return (
    <>
    <Card sx={{
       display: "flex", mb: 4, overflow: "hidden",mt:4,border: "1px solid #DCDCEB",borderRadius:"24px",boxShadow:"none",
       '@media(max-width : 900px)':{
        flexWrap:'wrap'
       } }}  >
      <CardMedia
        component="img"
        sx={{ width: "40%", objectFit: "contain",
          '@media(max-width : 900px)':{
        width:'100%'
       }
         }}
        image="/images/task/vrimage.png"
        alt="VR Technology"
      />
      <Box sx={{ p: 3, flexGrow: 1 }}>
        
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
            <Typography variant="h6" color="#000000" fontSize="24px" fontWeight={400} >Select Query Date</Typography>
            <Calendar onClick={()=>setOpenCalender(true)} style={{cursor:"pointer"}} />
          </Box>
      
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography color="#000000" fontSize="24px" fontWeight={400}>Total number of team members :</Typography>
          <Typography color="#000000" fontSize="24px" fontWeight={700}>{referralData?.totalTeamCount || 0}</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography color="#000000" fontSize="24px" fontWeight={400}>Team total top up</Typography>
          <Typography color="#000000" fontSize="24px" fontWeight={700}>{referralData?.totalTeamTopUp || 0} USDT</Typography>
        </Box>
      </Box>
      {openCalender && (
        <Dialog style={{padding:"0px",borderRadius:"20px"}}

        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "20px",
          },
        }}
        
        open={openCalender} onClose={()=>setOpenCalender(false)} >
         
          <CalenderModal />
          
        </Dialog>
      )}
     
    </Card>
    </>
  );
}
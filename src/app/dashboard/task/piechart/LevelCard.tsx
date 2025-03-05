"use client";

import { Card, Typography, Button, Box, Grid2 } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LevelData } from "@/types";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";



export default function LevelCard({ data,level }: {data:any,level:string}) {
  console.log(">>>>>>>>>>>>data",data);
  
  const router = useRouter()
  return (
    <Box
      sx={{
      
        borderRadius: "20px",
        border: " 1px solid #DCDCEB",
        overflow:"hidden",
       
        "&:hover": {
          border: "1px solid #1DAEFF",
          boxShadow: "0px 17px 50px 0px #8F90A652",
        },
      }}
    >
      <Box
        sx={{
          border: "1px solid #1DAEFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",

          p:2
        }}
      >
        <Typography variant="h6" sx={{
            color:"#110229",
            fontSize:"24px",
            fontWeight:700
        }}  >
          Level {level} Data
        </Typography>
        <Button variant="text"

        // onClick={()=>router.push(`/dashboard/member-list?id=${data?._id}`)}

        sx={{
            color:"#110229",
            fontSize:"16px",
            fontWeight:400
        }}
        
        endIcon={<Box sx={{background:"#E8F7FF",height:"30px",width:"30px",borderRadius:"100%",display:"flex",justifyContent:"center",alignItems:"center"}} >
            <ChevronRight />
        </Box>}>
          Member List
        </Button>
      </Box>
      <Box sx={{  p: 2,}} >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        ></Box>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize="18px" fontWeight={400} color="#110229">Total Team TopUp</Typography>
              <Typography fontSize="18px" fontWeight={700} color="#110229" >{data?.teamTopUp}</Typography>
            </Box>
          </Grid2>
          <Grid2 size={{ xs: 12 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize="18px" fontWeight={400} color="#110229">Total Head Count</Typography>
              <Typography fontSize="18px" fontWeight={700} color="#110229">{data?.totalHeadcount}</Typography>
            </Box>
          </Grid2>
          
          <Grid2 size={{ xs: 12 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography fontSize="18px" fontWeight={400} color="#110229">Total Return</Typography>
              <Typography fontSize="18px"  fontWeight={700}color="#110229">{data?.totalReturn}</Typography>
            </Box>
          </Grid2>
         
        </Grid2>
      </Box>
    </Box>
  );
}

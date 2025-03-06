"use client"
import React from 'react';
import {  Typography, Button, Box } from '@mui/material';
import MovieCard from './MovieCard';
import taskListData from '@/app/customHooks/taskList';
import { useRouter } from 'next/navigation';
import NoData from '../profile/noData';




const Products = () => {
  const router=useRouter()
  const {taskList,loading}=taskListData()
  return (
    <Box mt={2} >
      {taskList && taskList.length>0 ? (

     <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",pb:4}}  >
     <Typography variant="h4" sx={{ fontWeight: 700, color: "#0071CE", fontSize: "24px", mt: 2 }}>
        Products
      </Typography>
      <Button 
      onClick={()=>router.push("/dashboard/score-center")}
      sx={{
        border: "1px solid #DCDCEB",
        borderRadius:"12px",
        height:"50px",
        color:"#0071CE",
        fontSize:"16px",
        fontWeight:600
      }} >
        View All
      </Button>
    
     </Box>
      ):(
        <>
        {loading ? (
          <></>
        ): <NoData />}
        
       
        </>
      )}

      {/* Swiper component for auto sliding */}
      <MovieCard products={taskList} loading={loading} />
      
    </Box>
  );
};

export default Products;

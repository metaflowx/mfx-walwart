"use client"
import { Box, Button, Card, CardContent, Grid2, Rating, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Autoplay } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function MovieCard({products}:{products?:any}) {
    const router =useRouter()
  return (

    <Swiper
    spaceBetween={20}
    slidesPerView={3}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    navigation={false}
    modules={[Autoplay]}
    loop={true}
    breakpoints={{
      1200: { slidesPerView: 3 },
      900: { slidesPerView: 2 },
      200: { slidesPerView: 1 },

    }}
    
  >
    {products.map((product:any,index:number) => (
         <SwiperSlide key={index}>
         <Box

           sx={{
             borderRadius: "30px",
             overflow: "hidden",
             border: "1px solid #DCDCEB",
             "&:hover": {
               border: "1px solid #1DAEFF",
               boxShadow: "0px 17px 50px 0px #8F90A652",
             },
           }}
         >
           <Card sx={{ borderRadius: '12px' }}>
             <Box sx={{position:"relative"}}>
               <img src={product.image} style={{padding:"15px",width:"100%"}} />
               <Box sx={{position:"absolute",bottom:"30px",display:"flex",justifyContent:"space-between",left:"30px",right:"30px"}}>
                 <Box sx={{display:"flex",alignItems:"center"}} >
                   <img src="/images/home/play.png" />
                   <Typography sx={{color:"#fff",fontSize:"16px",fontWeight:400,paddingLeft:"5px"}} >4764564</Typography>
                 </Box>
                 <Typography sx={{color:"#fff",fontSize:"16px",fontWeight:400}}>01:30</Typography>
               </Box>
             </Box>
            
              
             <CardContent>
               <Typography
                 variant="h6"
                 sx={{
                   color: "#110229",
                   fontSize: "24px",
                   fontWeight: 700,
                 }}
               >
                 {product.title}
               </Typography>
               <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                 <Rating />
                 <Typography
                   variant="body2"
                   color="#110229"
                   sx={{ fontSize: "16px", fontWeight: 400 }}
                 >
                   5 Points
                 </Typography>
               </Box>

               <Button
               onClick={()=>router.push("/dashboard/rating")}
                 variant="contained"
                 fullWidth
                 sx={{
                   mt: 2,
                   background: "#0071CE",
                   borderRadius: "12px",
                   height: "50px",
                 }}
               >
                 Rating Immediately
               </Button>
             </CardContent>
           </Card>
         </Box>
       </SwiperSlide>
        ))}


  </Swiper>
 
  )
}

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Grid2, Rating, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';


const products = [
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov3.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' }, // Added extra product for testing
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' }, // Added extra product for testing
];

const Products = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 700, color: "#0071CE", fontSize: "24px", mt: 2 }}>
        Products
      </Typography>

      {/* Swiper component for auto sliding */}
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
          600: { slidesPerView: 1 },
        }}
        
      >
        {products.map((product) => (
          <SwiperSlide key={product.title}>
            <Grid2

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
            </Grid2>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Products;

"use client"
import React from 'react';
import {  Typography, Button, Box } from '@mui/material';
import MovieCard from './MovieCard';


const products = [
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov3.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' }, // Added extra product for testing
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' }, // Added extra product for testing
];

const Products = () => {
  return (
    <Box mt={2} >
     <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",pb:4}}  >
     <Typography variant="h4" sx={{ fontWeight: 700, color: "#0071CE", fontSize: "24px", mt: 2 }}>
        Products
      </Typography>
      <Button sx={{
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

      {/* Swiper component for auto sliding */}
      <MovieCard products={products} />
      
    </Box>
  );
};

export default Products;

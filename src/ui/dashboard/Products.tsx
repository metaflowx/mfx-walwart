import {  Card, CardMedia, CardContent, Typography, Button, Grid2, Rating, Box } from '@mui/material';

const products = [
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov1.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov2.png' },
  { title: 'Róise & Frank', views: '51,944 views', image: '/images/home/mov3.png' },
];

const Products = () => {
  return (
    <Grid2 container spacing={2} sx={{ mt: 4 }}>
      {products.map((product) => (
        <Grid2 size={{xs:12,sm:4}}  key={product.title}
        style={{
            border: "1px solid #1DAEFF",
            boxShadow: "0px 17px 50px 0px #8F90A652",
            borderRadius:"30px",
            overflow:"hidden"

        }}
        >
          <Card sx={{ borderRadius: '12px' }}>
            <CardMedia component="img" height="140" style={{padding:"15px"}} image={product.image} alt={product.title} />
            <CardContent>
            <Typography variant="h6">{product.title}</Typography>
              <Box sx={{display:"flex" ,justifyContent:"space-between"}} >
              <Rating />
              <Typography variant="body2" color="text.secondary">{product.views}</Typography>
             
              </Box>
            
              <Button variant="contained" fullWidth sx={{ mt: 2,background:"#0071CE",borderRadius:"12px",height:"50px" }}>Rating Immediately</Button>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Products;
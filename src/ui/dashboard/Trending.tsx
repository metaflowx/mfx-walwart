import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";

const trendingItems = ["Trailer", "Music", "Advertising"];

const Trending = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 700,color:"#0071CE",fontSize:"24px" }}>
        Trending
      </Typography>
      <Grid2 container spacing={2} sx={{ mt: 2 }}>
        {trendingItems.map((item) => (
          <Grid2 size={{ xs: 4 }} key={item}>
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                border: "1.5px solid #DCDCEB" ,
                borderRadius: "30px",
              
                "&:hover":{
                  border: "1px solid #1DAEFF",
                  boxShadow: " 0px 17px 50px 0px #8F90A652",
                }
              }}
            >
              <img
                src="/images/home/icon.png"
                alt="icon"
                style={{width:"55px",height:"55px"}}
           
              />
              <CardContent>
                <Typography sx={{color:"#110229",fontSize:"28px",fontWeight:700}} variant="h6">{item}</Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Trending;

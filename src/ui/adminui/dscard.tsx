import { Card, CardContent, Typography, CardMedia, Container, Grid2, Box } from "@mui/material";

const cardData = [
  {
    title: "Total Users",
    description: "2k",
  },
  {
    title: "Total Earning",
    description: "100k",
  },
  {
    title: "Total Blocked User",
    description: "50",
  },
  {
    title: "Total Subscription",
    description: "500",
  },
];

export default function Dscard() {
  return (
    <Box mb={2}>
      
      <Grid2 container spacing={2} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid2   key={index} size={{xs:12, sm:6, md:3}}  >
            <Card sx={{
              border:'1px solid #0071CE',
              boxShadow:'none',
              height:'100%'
            }}>
               
              <CardContent>
                <Typography variant="h6">{card.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

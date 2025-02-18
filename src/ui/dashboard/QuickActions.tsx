import { Box, Button, Container, Grid2 } from "@mui/material";
import {
  AccountBalance,
  CreditCard,
  TrendingUp,
  School,
} from "@mui/icons-material";

const QuickActions = () => {
  const actions = [
    { label: "Volunteable Assets", icon: "/images/home/dollar.png" },
    { label: "Withdraw", icon: "/images/home/Server.png" },
    { label: "InvestPlus", icon: "/images/home/user.png" },
    { label: "System Tutorial", icon: "/images/home/location.png" },
  ];

  return (
   <Container maxWidth="md" >
     <Grid2 spacing={2} container mt={3} sx={{background: "#FFFFFF",borderRadius:"20px"}} >
      {actions.map(({ label, icon }) => (
        <Grid2 key={`abc ${label}`} size={{ xs: 6 }}>
          <Box key={label} className="w-full py-3   gap-2 flex  items-center">
            <img src={icon} />
            {label}
          </Box>
        </Grid2>
      ))}
    </Grid2>
   </Container>
  );
};

export default QuickActions;

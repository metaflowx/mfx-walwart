import { Box, Button, Container, Grid2 } from "@mui/material";
import { useRouter } from "next/navigation";

const QuickActions = () => {
  const actions = [
    { label: "Wallet Recharge", icon: "/images/home/dollar.svg" ,url:"/dashboard/volunteable-assets"},
    { label: "Withdraw", icon: "/images/home/Server.svg",url:"/dashboard/withdraw" },
    { label: "InvestPlus", icon: "/images/home/user.svg",url:"/dashboard/investplus" },
    { label: "System Tutorial", icon: "/images/home/location.svg",url:"/dashboard/system-tutorial" },
  ];

  const router =useRouter()

  return (
   <Container maxWidth="md" >
     <Grid2 spacing={2} container mt={3} sx={{background: "#FFFFFF",borderRadius:"20px"}} >
      {actions.map(({ label, icon,url }) => (
        <Grid2 key={`abc ${label}`} size={{ xs: 6 }}>
          <Box onClick={()=>router.push(url)} key={label} sx={{color:"#000"}} className="w-full py-3   gap-2 flex  items-center cursor-pointer">
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

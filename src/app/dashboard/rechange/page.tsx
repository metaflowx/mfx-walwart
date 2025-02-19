import CommonBackButton from "@/components/ui/CommonBackButton";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { ChevronRight, Copy } from "lucide-react";
import React from "react";

export default function page() {
  const assestList = [
    {
      heading: "Select Mainnet",
      logo: "/images/coin/usdt.png",
      name: "TRC20-USDT",
      qrcode: "/images/coin/qrcode.png",
    },
    {
      heading: "Deposit Address",
      logo: "",
      name: "48754fhdjfhdgfhfgdgfhdfxzgcfsadrtt",
      qrcode: "/images/coin/qrcode.png",
    },
  ];
  return (
    <Box>
      <CommonBackButton title="Recharge" />

      <Grid2 container spacing={3} mt={4}>
        {assestList.map((item, index) => {
          return (
            <Grid2
              size={{ xs: 12, md: 6 }}
              sx={{
                border: "1.5px solid #DCDCEB",
                borderRadius: "20px",
                padding: "20px",
                "&:hover": {
                  border: "1px solid #1DAEFF",
                  boxShadow: "0px 17px 50px 0px #8F90A652",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "self-end",
                  height: "100%",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#110229",
                      fontSize: "30px",
                      fontWeight: 700,
                      pb: 2,
                    }}
                  >
                    {item.heading}
                  </Typography>

                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <img src={item.logo} />
                    <Typography
                      sx={{
                        color: "#110229",
                        fontSize: "24px",
                        fontWeight: 400,
                        paddingLeft: "10px",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Box>
                </Box>
                {index === 0 ? <img src={item.qrcode} /> : <Copy />}
              </Box>
            </Grid2>
          );
        })}
      </Grid2>

      <Box sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        mt:5
      }} >
        <Button sx={{
            background:"#0071CE",
            borderRadius:"10px",
            color:"#fff",
            height:"50px",
            fontWeight:700,
            fontSize:"18px",
            textTransform:"capitalize"
        }} >

Recharge Complete

        </Button>
        <Box sx={{display:"flex",alignItems:"center",pt:2}} >
            <img src="/images/coin/info.png" />
            <Typography sx={{color:"#000000",fontWeight:400,fontSize:"18px",pl:1}} >Warm reminder</Typography>
        </Box>
        <Typography pt={2} >1. Copy the address above or scan the QR code and select Tron (TRC20) network to deposit USDT </Typography>
        <Typography>  2. Please do not recharge other non-Tron(TRC20)-USDT assets. The funds will arrive in your account in about 1 to 3 minutes </Typography>
        <Typography>   3. If it does not arrive for a long time, please refresh the page or contact customer service</Typography>
      </Box>
    </Box>
  );
}

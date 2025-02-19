import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";

export default function TaskCard() {
  const dataList = [
    {
      title: "Promotion",
      des: "total user revenue",
      val: "0.00USDT",
    },
    {
      title: "Promotion QR Code",
      des: "Added income today",
      val: "0.00USDT",
    },
    {
      title: "funds to be released",
      des: "total user revenue",
      val: "0.00USDT",
    },
  ];
  return (
    <div>
      <Grid2 container spacing={2} mt={4}>
        {dataList.map((item, index) => {
          return (
            <Grid2
              key={index}
              size={{ xs: 12, sm: 6, md: 4 }}
              sx={{
                border: "1px solid #1DAEFF",
                boxShadow: "0px 17px 50px 0px #8F90A652",
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              <Box>
                <Box
                  sx={{
                    background: "#D9E9FF",
                    borderRadius: "12px",
                    textAlign: "center",
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    style={{
                      color: "#000000",
                      fontSize: "30px",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
                <Box pt={3} pl={2} pb={2}>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "20px",
                      fontWeight: 400,
                    }}
                  >
                    {item.des}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "30px",
                        fontWeight: 700,
                        color: "#0071CE",
                      }}
                    >
                      {item.val}
                    </Typography>
                    {index === 1 && (
                      <Box sx={{background:"#0071CE",borderRadius:"8px",padding:"5px"}} >
                        <img src="/images/task/qrcode.png" />
                      </Box>
                    )}

                    {index === 2 && (
                      <Box>
                       <Button sx={{
                        background:"#0071CE",
                        borderRadius:"52px",
                        height:"40px",
                        color:"#fff",
                        fontSize:"18px",
                        fontWeight:400
                       }} >
                        View details
                       </Button>
                      </Box>
                    )}
                  </Box>
                </Box>
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}

"use client"
import { Box, Button, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function TaskCard({referralData}:{referralData?:any}) {
    const router = useRouter()
  const dataList = [
    {
      title: "Promotion",
      des: "Total user revenue",
      val: `${referralData?.totalEarnings || 0}USDT`,
      href:""
    },
    {
      title: "Promotion QR Code",
      des: "Added income today",
      val: `${referralData?.totalTodayEarning || 0}USDT`,
      href:"/dashboard/referral"
    },
    // {
    //   title: "funds to be released",
    //   des: "total user revenue",
    //   val: "0.00USDT",
    // },
  ];
  return (
    <div>
      <Grid2 container spacing={2} mt={4}>
        {dataList.map((item, index) => {
          return (
            <Grid2
              key={index}
              size={{ xs: 12, sm: 6 }}
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
                      fontSize: "20px",
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
                      flexWrap:'wrap'
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#0071CE",
                      }}
                    >
                      {item.val}
                    </Typography>
                    {index === 1 && (
                      <Box onClick={()=>router.push(item?.href)} sx={{background:"#0071CE",borderRadius:"8px",padding:"5px",cursor:"pointer"}} >
                        <img src="/images/task/qrcode.png" />
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

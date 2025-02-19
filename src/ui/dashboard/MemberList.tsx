import { Box, Grid2, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

export default function MemberList() {
    const router=useRouter()
  const listData = [
    {
      title: "VIP 6",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
    {
      title: "VIP 6",
      des: "Congratulations to +96****55 for unlocking and directly inviting 24 people.",
    },
  ];
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#0071CE",
          fontSize: "24px",
          mt: 5,
          pb: 5,
        }}
      >
        Member list
      </Typography>

      <Box
        sx={{
          border: "1px solid #DCDCEB",
          borderRadius: "30px",
          padding: "15px",
        }}
      >
        <Grid2 container spacing={2}>
          {listData.map((item, index) => {
            return (
              <Grid2 key={index} size={{ xs: 12, sm: 6 }}>
                <Box
                onClick={()=>router.push("/dashboard/member-list")}

                  sx={{
                    border: "1px solid #1DAEFF",
                    boxShadow: "0px 17px 50px 0px #8F90A652",
                    borderRadius: "16px",
                    padding: "10px",
                    cursor:"pointer"
                  }}
                >
                  <Box
                    sx={{
                      background: "#FFC220",
                      borderRadius: "6px",
                      width: "fit-content",
                      padding: "10px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#000000",
                        fontSize: "20px",
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#000000",
                      fontSize: "18px",
                      fontWeight: 400,
                    }}
                  >
                    {item.des}
                  </Typography>
                </Box>
              </Grid2>
            );
          })}
        </Grid2>
      </Box>
    </Box>
  );
}

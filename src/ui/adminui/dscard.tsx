"use client"
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { Card, CardContent, Typography, Box, Skeleton, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";

export default function Dscard() {
  const [cardData, setCardData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const dashboardList = async () => {
    try {
      const res = await apiRouterCall({
        method: "GET",
        endPoint: "dashboard",
      });

      if (res?.status === 200) {
        console.log(">>>>>>>>>res34", res);
        setCardData([
          {
            title: "Total Users",
            description: res?.data?.userCount || 0,
          },
          {
            title: "Total Earning",
            description: res?.data?.platefromTotalEarnig || 0,
          },
          {
            title: "Total Blocked User",
            description: res?.data?.blockUser || 0,
          },
          {
            title: "Total Subscription",
            description: res?.data?.totalSubscriptionCount || 0,
          },

          {
            title: "Total Active Task Count",
            description: res?.data?.activeTaskCount || 0,
          },
          {
            title: "Total Active Package Count",
            description: res?.data?.activePackageCount || 0,
          },
        ]);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    dashboardList();
  }, []);

  return (
    <Box mb={2}>
      <Grid2 container spacing={2} justifyContent="center">
        {Array.from(new Array(6)).map((_, index) => (
          <Grid2 key={index} size={{xs:12 ,sm:6 ,md:4}}>
            <Card sx={{ border: '1px solid #0071CE', boxShadow: 'none', height: '100%' }}>
              <CardContent>
                {loading ? (
                  <>
                    <Skeleton variant="text" width="60%" height={30} />
                    <Skeleton variant="text" width="80%" height={25} />
                  </>
                ) : (
                  <>
                    <Typography variant="h6">{cardData[index]?.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {cardData[index]?.description}
                    </Typography>
                  </>
                )}
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

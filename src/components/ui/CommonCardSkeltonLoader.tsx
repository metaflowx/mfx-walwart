import { Box, Card, CardContent, Skeleton } from '@mui/material'
import React from 'react'

export default function CommonCardSkeltonLoader() {
  return (
    <Box
            sx={{
              borderRadius: "30px",
              overflow: "hidden",
              border: "1px solid #DCDCEB",
              height: "100%",
              "&:hover": {
                border: "1px solid #1DAEFF",
                boxShadow: "0px 17px 50px 0px #8F90A652",
              },
            }}
          >
            <Card sx={{ borderRadius: "12px", height: "100%" }}>
              <Box sx={{ position: "relative" }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={350}
                  sx={{ borderRadius: "30px", padding: "15px" }}
                />
              </Box>

              <CardContent>
                <Skeleton
                  variant="text"
                  width="60%"
                  height={30}
                  sx={{ marginBottom: 2 }}
                />

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Skeleton variant="text" width="25%" height={20} />

                  <Skeleton variant="text" width="30%" height={20} />
                </Box>

                {/* Skeleton loader for the button */}

                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={50}
                  sx={{ borderRadius: "12px", marginTop: 2 }}
                />
              </CardContent>
            </Card>
          </Box>
  )
}

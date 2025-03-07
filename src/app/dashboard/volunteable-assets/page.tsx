"use client"
import useAssetsList from '@/app/customHooks/useAssetsList'
import CommonBackButton from '@/components/ui/CommonBackButton'
import { Box, Grid2, Typography, Skeleton } from '@mui/material'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const { assetsList, loading, refetch } = useAssetsList();
    const router = useRouter()

    return (
        <Box>
            <CommonBackButton title='Recharge Select' />
            <Grid2 container spacing={3} mt={4}>
                {/* Skeleton loader while loading */}
                {loading ? (
                    Array(6) // This represents the number of skeleton items you'd like to show. Adjust as needed.
                        .fill(0)
                        .map((_, index) => (
                            <Grid2
                                key={index}
                                size={{ xs: 12, sm: 6, md: 4 }}
                                sx={{
                                    border: "1.5px solid #DCDCEB",
                                    borderRadius: "20px",
                                    padding: "20px",
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    "&:hover": {
                                        border: "1px solid #1DAEFF",
                                        boxShadow: "0px 17px 50px 0px #8F90A652"
                                    }
                                }}
                            >
                                <Skeleton variant="rectangular" width="100%" height="100px" />
                            </Grid2>
                        ))
                ) : (
                    // Render assets list when data is loaded
                    assetsList.map((item: any, index) => {
                        if(!item?.depositEnabled){
                            return null
                        }
                        return(
                            <Grid2
                            key={index}
                            size={{ xs: 12, sm: 6, md: 4 }}
                            onClick={() => router.push(`/dashboard/rechange?id=${item._id}`)} // Pass the ID in the URL
                            sx={{
                                border: "1.5px solid #DCDCEB",
                                borderRadius: "20px",
                                padding: "20px",
                                cursor: "pointer",
                                "&:hover": {
                                    border: "1px solid #1DAEFF",
                                    boxShadow: "0px 17px 50px 0px #8F90A652"
                                }
                            }}
                        >
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ display: "flex", alignItems: "center" }}>
                                    <img src={`/images/coin/${item?.symbol}.png`} style={{ width: "40px", height: "40px",borderRadius:"100px" }} />
                                    <Typography sx={{
                                        color: "#110229",
                                        fontSize: "24px",
                                        fontWeight: 400,
                                        paddingLeft: "10px"
                                    }}>
                                        {item?.name}
                                    </Typography>
                                </Box>
                                <ChevronRight />
                            </Box>
                        </Grid2>
                        )
                    })
                )}
            </Grid2>
        </Box>
    )
}

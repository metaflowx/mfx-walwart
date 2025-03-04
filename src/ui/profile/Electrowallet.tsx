"use client";

import { Box, Button, Typography, Skeleton } from "@mui/material";

import Clicktoback from "./clicktoback";
import CustomButton from "./custombutton";
import NoData from "./noData";
import useAssetsDetail from "@/app/customHooks/useAssetsDetail";
import { formatUnits } from "viem";
import useWalletBalnces from "@/app/customHooks/useWalletBalnces";

const Electrowallet = () => {
    const { walletAssetsList, loading } = useAssetsDetail();
    const { walletBalances } = useWalletBalnces();
    return (
        <>
            <Box>
                <Clicktoback href={"/dashboard/profile"} title={"Electronic Wallet"} />

                <Box sx={{
                    border: '1px solid #1DAEFF',
                    borderRadius: '12px',
                    padding: '1rem',
                    marginTop: '1rem',
                    boxShadow: '0px 6px 18px -8px #0000005e',
                }}>
                    <Box mb={1}>
                        <Typography color="#000">Total Assets(USDT)</Typography>
                        {loading ? <Skeleton width={80} height={32} /> : <Typography color="#000" fontWeight={700} variant="h6">{walletBalances && Number(formatUnits(walletBalances?.totalBalanceInWeiUsd,18)).toFixed(6)}</Typography>}
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}>
                        <CustomButton href={"/dashboard/volunteable-assets"} title={"Asset Deposit"} />
                        <CustomButton href={"/dashboard/invest"} title={"Invest"} />
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography pt={3} pb={2}>Asset Details</Typography>
                </Box>
                
                {loading ? (
                    <Box sx={{
                        border: '1px solid #DCDCEB',
                        textAlign: 'center',
                        padding: '2rem 1rem',
                        borderRadius: '12px'
                    }}>
                        {[...Array(3)].map((_, index) => (
                            <Box key={index} sx={{ marginBottom: '1rem' }}>
                                <Skeleton width="100%" height={24} />
                                <Skeleton width="100%" height={24} />
                            </Box>
                        ))}
                    </Box>
                ) : walletAssetsList?.assets?.length > 0 ? (
                    <Box sx={{
                        border: '1px solid #DCDCEB',
                        textAlign: 'center',
                        padding: '2rem 1rem',
                        borderRadius: '12px'
                    }}>
                        {walletAssetsList.assets.map((data: any, index: number) => (
                            <Box key={index}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography>Balance</Typography>
                                    <Typography>{formatUnits(data?.balance, 18)}</Typography>
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography>Lock</Typography>
                                    <Typography>{formatUnits(data?.lock, 18)}</Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <NoData />
                )}
            </Box>
        </>
    );
};

export default Electrowallet;

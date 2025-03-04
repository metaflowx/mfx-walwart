"use client";
import CommonTab from "@/components/ui/CommonTab"
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import DropdownList from "./dropdownList";
import Image from "next/image";
import Link from "next/link";
import Clicktoback from "./clicktoback";
import CustomButton from "./custombutton";
import NoData from "./noData";


const Electrowallet = () => {
   

   
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
                        <Typography color="#000" fontWeight={700} variant="h6">0.00</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        flexWrap:'wrap'
                    }}>
                        <CustomButton href={"/dashboard/volunteable-assets"} title={"Asset Deposit"}/>
                        <CustomButton href={"/dashboard/invest"} title={"Invest"}/>
                        
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography>Asset Details</Typography>
                    </Box>
                    <DropdownList />
                </Box>
                <NoData/>
            </Box>
        </>
    )
}

export default Electrowallet
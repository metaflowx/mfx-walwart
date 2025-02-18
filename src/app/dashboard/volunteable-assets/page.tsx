"use client"
import CommonBackButton from '@/components/ui/CommonBackButton'
import { Box, Grid2, Typography } from '@mui/material'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function page() {
    const router =useRouter()
    const assestList=[
        {
            logo:"/images/coin/usdt.png",
            name:"TRC20-USDT",
            url:"/dashboard/rechange"
        },
        {
            logo:"/images/coin/trx.png",
            name:"TRX",
             url:"/dashboard/rechange"
        },
        {
            logo:"/images/coin/usdt1.png",
            name:"BEP20-USDT",
             url:"/dashboard/rechange"
        },
        {
            logo:"/images/coin/bnb.png",
            name:"BNB",
             url:"/dashboard/rechange"
        },
        {
            logo:"/images/coin/usdc.png",
            name:"BEP20-USDC",
             url:"/dashboard/rechange"
        },
    ]
  return (
    <Box>

        <CommonBackButton title='Rechange Select' />

        <Grid2 container spacing={3} mt={4} >
            {assestList.map((item,index)=>{
                return(
                    <Grid2 size={{xs:6,sm:4}} 
                    onClick={()=>router.push(item.url)}
                    sx={{
                        border: "1.5px solid #DCDCEB",
                        borderRadius:"20px",
                        padding:"20px",
                        cursor:"pointer",
                        "&:hover":{
                            border: "1px solid #1DAEFF",
                            boxShadow: "0px 17px 50px 0px #8F90A652"

                        }
                    }}
                    >
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}} >
                        <Box sx={{display:"flex",alignItems:"center"}} >
                            <img src={item.logo} />
                            <Typography sx={{
                                color:"#110229",
                                fontSize:"24px",
                                fontWeight:400,
                                paddingLeft:"10px"
                            }} >{item.name}</Typography>
                        </Box>
                        <ChevronRight />
                        </Box>
                    </Grid2>
                )
            })}
        </Grid2>
      
    </Box>
  )
}

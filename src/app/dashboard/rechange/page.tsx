import CommonBackButton from '@/components/ui/CommonBackButton'
import { Box, Grid2, Typography } from '@mui/material'
import { ChevronRight } from 'lucide-react'
import React from 'react'

export default function page() {
    const assestList=[
        {
            logo:"/images/coin/usdt.png",
            name:"TRC20-USDT"
        },
        {
            logo:"/images/coin/trx.png",
            name:"TRX"
        },
        {
            logo:"/images/coin/usdt1.png",
            name:"BEP20-USDT"
        },
        {
            logo:"/images/coin/bnb.png",
            name:"BNB"
        },
        {
            logo:"/images/coin/usdc.png",
            name:"BEP20-USDC"
        },
    ]
  return (
    <Box>

        <CommonBackButton title='Rechange' />

        <Grid2 container spacing={3} mt={4} >
            {assestList.map((item,index)=>{
                return(
                    <Grid2 size={{xs:6,sm:4}} 
                    sx={{
                        border: "1.5px solid #DCDCEB",
                        borderRadius:"20px",
                        padding:"20px",
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

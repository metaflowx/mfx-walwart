"use client"
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CommonBackButton({title,isIcon}:{title:string,isIcon?:any}) {
      const router =useRouter()
  return (
    <div className='flex justify-between'>

    <div className='flex items-center'>

        <Box onClick={()=>router.back()} style={{cursor:"pointer"}} >

        <img src="/images/coin/backbutton.svg"   />
        </Box>

        <Typography sx={{
            paddingLeft:"5px",
            color:"#0071CE",
            fontWeight:700,
            fontSize:{xs:"20px", sm:"40px"}
        }} >{title}</Typography>
      
    </div>
    {isIcon && (

    <img onClick={()=>router.push("/dashboard/transaction-history")} src="/images/withdraw/calender.svg" style={{width:"40px",objectFit:"contain",cursor:"pointer",pointerEvents:"all"}} />
    )}
    </div>
  )
}

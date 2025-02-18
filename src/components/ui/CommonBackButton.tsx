"use client"
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function CommonBackButton({title}:{title:string}) {
      const router =useRouter()
  return (
    <div className='flex items-center'>

        <Box onClick={()=>router.back()} style={{cursor:"pointer"}} >

        <img src="/images/coin/backbutton.png"   />
        </Box>

        <Typography sx={{
            paddingLeft:"5px",
            color:"#0071CE",
            fontWeight:700,
            fontSize:"40px"
        }} >{title}</Typography>
      
    </div>
  )
}

import { Box, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import arrow from '../../../public/profile/arrow.svg'


interface props{
    href:string;
    title:string;
}

const Clicktoback=({href, title}:props)=>{
    return(
        <>
        <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                }}>
                    <Link href={href}><Image src={arrow} alt={""} style={{ rotate: '180deg' }} /></Link>
                    <Typography color="#0071CE" variant="h4">{title}</Typography>
                </Box>
        </>
    )
}

export default Clicktoback
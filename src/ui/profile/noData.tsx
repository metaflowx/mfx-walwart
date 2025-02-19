import { Box, Typography } from "@mui/material"
import Image from "next/image"
import nodata from '../../../public/profile/nodata.svg'

 

const NoData = () => {
    return (
        <>
            <Box sx={{
                border: '1px solid #DCDCEB',
                textAlign: 'center',
                padding: '5rem 1rem',
                borderRadius: '12px'

            }}>
                <Image src={nodata} alt={""} style={{ display: 'inline-block' }} />
            </Box>
        </>
    )
}

export default NoData
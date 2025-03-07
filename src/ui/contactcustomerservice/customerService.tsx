import { Box, Grid2, Typography } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import rArrow from '../../../public/profile/rArrow.svg'
import telegram from '../../../public/profile/telegram.svg'
import support from '../../../public/profile/support.svg'




const Listleft = [
    {
        id: 1,
        Image: telegram,
        Name: "WALMART Official Channel",
        href: "https://t.me/walmartcoins",
    },
    {
        id: 2,
        Image: support,
        Name: "WALMART Customer Service",
        href: "https://t.me/walmartcoins",
    },



]
const CustomerService = () => {


    return (
        <>
            <Box>
                <Box mb={3}>
              
                <Typography color="#0071CE" variant="h4" fontWeight={700}>Online Service</Typography>
                <Typography color="#000">Choose your preferred online customer service contact method</Typography>
                </Box>
                <Grid2 container spacing={2}>
                    {Listleft.map((item, index) => (
                        <Grid2 size={{ lg: 6, md: 6, sm: 6, xs: 12 }}>
                            <Box sx={{
                                border: '1px solid #DCDCEB',
                                borderRadius: '12px',
                                padding: '1rem'
                            }}>

                                <Link href={item.href} target="_blank" style={{ display: 'block', margin: '5px 0px', }}>
                                    <Box key={index} sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',

                                        }}>
                                            <Box><Image src={item.Image} alt={""}  width={60} height={60}/></Box>
                                            <Typography color="#000" fontWeight={700}>{item.Name}</Typography>


                                        </Box>
                                        <Box>
                                            <Link href={item.href} ><Image src={rArrow} alt={""} /></Link>
                                        </Box>

                                    </Box>
                                </Link>

                            </Box>

                        </Grid2>
                    ))}


                </Grid2>
            </Box>
        </>
    )
}

export default CustomerService
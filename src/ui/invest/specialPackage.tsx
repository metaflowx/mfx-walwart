import { Box, Button, Grid2, Typography } from "@mui/material"
import Link from "next/link";
import { useRouter } from "next/navigation";


const Package = [
    {
        id: 1,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 2,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 3,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 4,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 5,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 6,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 7,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 8,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 9,
        time:'1',
        days:'120',
        income:0.18,

    },
    {
        id: 10,
        time:'1',
        days:'120',
        income:0.18,

    },
     
]

const SpecialPackage = () => {
     
    return (
        <>
            <Box>
                <Box mt={4}>
                    <Typography variant="h4" fontWeight={700} color="#0071CE">Special Package</Typography>
                </Box>


                <Box sx={{
                    marginTop: '2rem'
                }}>
                    <Grid2 container spacing={2} justifyContent={'center'}>
                        {Package.map((item, index) => (
                            <Grid2 key={index} size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
                                <Box position={'relative'}  mt={5}>


                                    <Box sx={{
                                        border: '1px solid #DCDCEB',

                                        padding: '1rem',
                                        borderRadius: '12px',
                                        textAlign: 'center',
                                        transition: '0.5s',
                                        '&:hover': {
                                            boxShadow: '0px 4px 12px -2px #00000078',
                                            border: '1px solid #1DAEFF',
                                        }

                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginTop: '1rem'
                                        }}>
                                            <Box textAlign={'left'}>
                                                <Typography fontWeight={700}> {item.time} Times</Typography>
                                                <Typography color="#000" >Daily Earnings</Typography>
                                            </Box>
                                            <Box textAlign={'center'}>
                                                <Typography fontWeight={700}>{item.days} Days</Typography>
                                                <Typography color="#000" >Expire date</Typography>
                                            </Box>
                                            <Box textAlign={'right'}>
                                                <Typography fontWeight={700}>{item.income} USDT</Typography>
                                                <Typography color="#000" >Daily income</Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{

                                        }}>
                                            <Link href={"/dashboard/score-center"}>
                                            <Button 
                                              
                                             sx={{
                                                backgroundColor: 'transparent',
                                                padding: '10px',
                                                borderRadius: '8px',
                                                marginTop: '1rem',
                                                border: '1px solid #0071CE',
                                                color: '#000',
                                                boxShadow: 'inherit',
                                                '&:hover': {
                                                    backgroundColor: '#0071CE',
                                                    border: '1px solid #0071CE',
                                                    color: '#fff',
                                                    boxShadow: 'inherit',
                                                }
                                            }} fullWidth variant="contained">Score to get income（0/1）</Button>
                                            </Link>
                                        </Box>
                                    </Box>

                                    <Box sx={{
                                        border: '1px solid #1DAEFF',
                                        padding: '5px',
                                        borderRadius: '30px',
                                        textAlign: 'center',
                                        backgroundColor: '#fff',
                                        position: 'absolute',
                                        width: '80%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        top: '-20px'

                                    }}>
                                        <Typography color="#0071CE">VIP {item.id}</Typography>
                                    </Box>
                                </Box>

                            </Grid2>
                        ))}
                    </Grid2>
                </Box>
 
            </Box>
        </>
    )
}

export default SpecialPackage
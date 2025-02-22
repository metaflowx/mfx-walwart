
import { Box, Button, IconButton, styled, Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Link from "next/link";
import backbtn from '../../../public/admin/backbtn.svg'
import DashboardSidebar from "./dashboardSidebar";
import logo from '../../../public/admin/logo.png'
import PersonIcon from '@mui/icons-material/Person';


const useStyles = makeStyles({


    dis__connect: {
        display: 'block'
    },
    bthome: {
        color: '#fff',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        backgroundColor: 'transparent !important'
    },
    texthdr: {
        '@media(max-width : 900px)': {
            display: 'none'
        }
    },
    texthdrBox: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
    },
    logo: {
        borderBottom: '1px solid #1d1d2000',
        display: 'block',
        padding: 15,
        height: '74px',

    },


});

const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: '#101012',
    border: '1px solid #1D1D20',
    color: '#fff',
    padding: "13px 16px",
    borderRadius: '36px',
    display: 'block',
    textDecoration: 'none',
    fontSize: '14px !important'
}));

const DashboardHeader = () => {
    const classes = useStyles();



    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                height: '60px',
                position: 'sticky',
                backgroundColor: '#0071CE',
                zIndex: '100',
                top: '0px',
                '@media(max-width : 900px)': {
                    padding: '10px 20px',
                    flexDirection: 'row-reverse'
                }
            }}>
                <Box sx={{ display: 'none', '@media(max-width : 900px)': { display: 'block' } }}>
                    <DashboardSidebar />
                </Box>
                <Box>
                    <Link className={classes.logo} href={'/'}><Image src={logo} alt={''} /></Link>
                </Box>
                <Box className={classes.texthdr}><Typography fontSize={20} fontWeight={300} color={'#fff'}>Welcome to Walmart Dashboard!</Typography></Box>








                <Box sx={{
                    '@media(max-width : 900px)': {
                        display: 'none'
                    }
                }}>
                    <IconButton aria-label="delete">
                        <PersonIcon  sx={{color:'#fff'}}/>
                    </IconButton>
                </Box>



            </Box>
        </>
    )
}

export default DashboardHeader
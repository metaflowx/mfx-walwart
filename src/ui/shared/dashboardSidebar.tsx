"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Typography, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Sidebardb from '../adminui/sidebardb';
import { Logout } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const StyledMenu = styled(Link)(({ theme }) => ({
    backgroundColor: '#f8c71f',
    color: '#000',
    padding: '8px',
    display: 'inline-flex',
    textDecoration: 'none',
    fontWeight: '700',
    borderRadius: '5rem',
    transition: '0.5s',
    '&:hover': {
        backgroundColor: '#f8c71f',
        color: '#000'
    }
}));

const StyledIcon = styled(MenuIcon)({
    color: '#000'
});

const MobileBox = styled(Box)(({ theme }) => ({
    display: 'none',
    position: 'relative',
    '@media(max-width:1200px)': {
        display: 'block'
    }
}));



export default function DashboardSidebar() {
    const [state, setState] = React.useState({ left: false });
    const router=useRouter()
    const handleLogout = () => {
    
        document.cookie = 'auth_token=; max-age=0; path=/;'; 
        router.replace('/login');
      };
    const toggleDrawer = (anchor:any, open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor:any) => (
        <Box>
            <Box
                sx={{
                    width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300,
                    textAlign: 'end',
                    margin: '15px'
                }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <Link href={'#'}><CloseIcon sx={{ color: '#f8c71f' }} /></Link>
            </Box>
            <MobileBox>
                <Sidebardb />
            </MobileBox>
        </Box>
    );

    return (
        <Box sx={{display:"flex",alignItems:"center"}}>
           

            <IconButton onClick={()=>handleLogout()} sx={{ backgroundColor: '#f8c71f',
    color: '#000',
    padding: '8px',
    display: 'inline-flex',
    textDecoration: 'none',
    fontWeight: '700',
    borderRadius: '5rem',
    transition: '0.5s',
    '&:hover': {
        backgroundColor: '#f8c71f',
        color: '#000'
    }}}>
            <Logout  />
            </IconButton>&nbsp;
            
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <StyledMenu onClick={toggleDrawer(anchor, true)} href={""}>
                     
                        <StyledIcon />
                    </StyledMenu>
                    <Drawer
                        sx={{
                            '& .MuiDrawer-paper': {
                                backgroundColor: '#0071CE'
                            }
                        }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </Box>
    );
}

'use client'

import Link from 'next/link'
import { Box, styled, Typography } from '@mui/material'
import { usePathname } from 'next/navigation';
import hl1 from '../../../public/profile/hl1.svg'
import hl2 from '../../../public/profile/hl2.svg'
import hl3 from '../../../public/profile/hl3.svg'
import hl4 from '../../../public/profile/hl4.svg'
import hl5 from '../../../public/profile/hl5.svg'

import hd1 from '../../../public/profile/hd1.svg'
import hd2 from '../../../public/profile/hd2.svg'
import hd3 from '../../../public/profile/hd3.svg'
import hd4 from '../../../public/profile/hd4.svg'
import hd5 from '../../../public/profile/hd5.svg'
import Image from 'next/image';

const ListBox = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '1rem',
    padding:'5px 5px 0px 5px',
    
}));

const ListItem = styled('li')(({ theme }) => ({
    textAlign:'center',
    'a': {
         
        display: 'inline-block',
        color: '#000',
        textDecoration: 'none',
        borderRadius: '6px',
        width: 'max-content'
    }
}));

const NavbarList = [
    {
        id: 1,
        Name: "Home",
        Url: "/dashboard",
        Gradient: "#fff",
        Border: "1px solid #1ab3e5",
        Redius: "50px",
        imageLight: hl1,
        imageDark: hd1,
    },
    {
        id: 2,
        Name: "Promotion",
        Url: "/dashboard/task",
        Gradient: "#fff",
        Border: "1px solid #1ab3e5",
        Redius: "50px",
        imageLight: hl2,
        imageDark: hd2,
    },
    {
        id: 3,
        Name: "Invest",
        Url: "/dashboard/invest",
        Gradient: "#fff",
        Border: "1px solid #1ab3e5",
        Redius: "50px",
        imageLight: hl3,
        imageDark: hd3,
    },
    {
        id: 4,
        Name: "Referral",
        Url: "/dashboard/referral",
        Gradient: "#fff",
        Border: "1px solid #1ab3e5",
        Redius: "50px",
        imageLight: hl4,
        imageDark: hd4,
    },
    {
        id: 5,
        Name: "Profile",
        Url: "/dashboard/profile",
        Gradient: "#fff",
        Border: "1px solid #1ab3e5",
        Redius: "50px",
        imageLight: hl5,
        imageDark: hd5,
    }
];

const MobileFooter = () => {
    const pathname = usePathname();

    return (
        <Box sx={{
            display: 'none',
            position:'sticky',
            bottom:0,
            zIndex:'1111',
            backgroundColor: '#0071CE',
            padding: '10px',
            borderRadius: '0px',
            '@media(max-width : 1200px)': {
                display: 'block',
                '@media(max-width : 600px)': {
                    padding: '0px',
                     
            }
            }
        }}>
            <ListBox>
                {NavbarList.map((item) => (
                    <ListItem key={item.id}>
                        <Link
                            style={{
                                
                                color: pathname === item.Url ? '#000' : '',
                                 
                                borderRadius: item.Redius
                            }}
                            href={item.Url}>
                           
                            <Image src={pathname === item.Url ? item.imageDark : item.imageLight} alt={''}/>
                        </Link>
                        <Typography mt={-1} fontSize={13} color={pathname === item.Url ? '#FFC220' : '#fff'}> {item.Name}</Typography>
                    </ListItem>
                ))}
            </ListBox>
        </Box>
    );
};

export default MobileFooter;

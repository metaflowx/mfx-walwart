'use client'
import Link from 'next/link'
import { Box, styled } from '@mui/material'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import sideiconl_01 from '../../../public/admin/sideiconl_01.svg'
import sideiconl_02 from '../../../public/admin/sideiconl_02.svg'
import sideiconl_03 from '../../../public/admin/sideiconl_03.svg'
import sideiconl_04 from '../../../public/admin/sideiconl_04.svg'
import sideiconl_05 from '../../../public/admin/sideiconl_05.svg'
import sideiconl_06 from '../../../public/admin/sideiconl_06.svg'
import sideiconl_07 from '../../../public/admin/sideiconl_07.svg'
import sideiconl_08 from '../../../public/admin/sideiconl_08.svg'
import sideicond_01 from '../../../public/admin/sideicond_01.svg'
import sideicond_02 from '../../../public/admin/sideicond_02.svg'
import sideicond_03 from '../../../public/admin/sideicond_03.svg'
import sideicond_04 from '../../../public/admin/sideicond_04.svg'
import sideicond_05 from '../../../public/admin/sideicond_05.svg'
import sideicond_06 from '../../../public/admin/sideicond_06.svg'
import sideicond_07 from '../../../public/admin/sideicond_07.svg'
import sideicond_08 from '../../../public/admin/sideicond_08.svg'

const MainDiv = styled(Box)(({ theme }) => ({
    width: '250px',
    minHeight: '100vh',
    position: 'fixed',
    top: 0,
    backgroundColor: '#0071CE',
    [theme.breakpoints.down('lg')]: {
        width: 'inherit',
    },
}));

const MainList = styled(Box)({
    padding: 15,
    margin: 0,
    listStyle: 'none',
    marginTop: '3.5rem',
    '@media(max-width: 600px)': {
        marginTop: '1.5rem',
    },
});

const ListItem = styled(Box)({
    marginTop: '1rem',
});

const navLinks = [
    { name: 'Dashboard', href: '/admin/dashboard', iconl: sideiconl_01, icond: sideicond_01 },
    { name: 'Task', href: '/admin/task', iconl: sideiconl_06, icond: sideicond_06 },
    { name: 'Invest', href: '/admin/invest', iconl: sideiconl_02, icond: sideicond_02 },
    { name: 'Referral', href: '/admin/referral', iconl: sideiconl_04, icond: sideicond_04 },
    { name: 'User', href: '/admin/user', iconl: sideiconl_03, icond: sideicond_03 },
    { name: 'Profile', href: '/admin/profile', iconl: sideiconl_07, icond: sideicond_07 },
    { name: 'Assets', href: '/admin/assets-list', iconl: sideiconl_04, icond: sideiconl_04 },

];

const Sidebardb = () => {
    const pathname = usePathname();

    return (
        <MainDiv>
            <MainList >
                {navLinks.map((item, index) => (
                    <ListItem key={index}>
                        <Link
                            href={item.href}
                            style={{
                                textDecoration: 'none',
                                color: pathname === item.href ? '#000' : '#fff',
                                fontSize: '18px',
                                padding: '10px 14px',
                                backgroundColor: pathname === item.href ? '#f8c71f' : '',
                                width: '100%',
                                borderRadius: '30px',
                                transition: '0.5s',
                                display: 'flex',
                                gap: '1rem',
                            }}
                        >
                            <Image src={pathname === item.href ? item.icond : item.iconl} alt={''} />
                            {item.name}
                        </Link>
                    </ListItem>
                ))}
            </MainList>
        </MainDiv>
    );
};

export default Sidebardb;
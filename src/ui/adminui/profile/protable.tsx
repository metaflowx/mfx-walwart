'use client'
import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import r2 from '../../icons/r2.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";
import Switch from '@mui/material/Switch';



const useStyles = makeStyles({
    tableContainer: {
        // maxHeight: 100,
        '&::-webkit-scrollbar': {
            width: '12px',
        },
        '&::-webkit-scrollbar-track': {
            background: '#101012',
            borderRadius: '0px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1D1D20',
            borderRadius: '10px',
            border: '3px solid #101012',
        },
        '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
        },
    },
    stakebtn: {
        backgroundColor: 'transparent',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #00ffff !important',
        color: '#00ffff !important',
        textDecoration: 'none',
        transition: '0.5s',
        '&:hover': {
            backgroundColor: '#00ffff !important',
            color: '#000 !important'
        }
    },
    stakebtn__wrp: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'end'
    },
    noData: {
        height: '50px',
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        justifyItems: "center",
        backgroundColor: '#080808'
    }
});

const Protable = () => {
    const classes = useStyles();



    const TableList = [
        {
            id: 1,
            User: "Js Reigns",
            Earning: "0.00",
            level: '3',
        },

        {
            id: 2,
            User: "Js Reigns",
            Earning: "0.00",
            level: '4',
        },
        {
            id: 3,
            User: "Js Reigns",
            Earning: "0.00",
            level: '3',
        },
        {
            id: 4,
            User: "Js Reigns",
            Earning: "0.00",
            level: '2',
        },
        {
            id: 5,
            User: "Js Reigns",
            Earning: "0.00",
            level: '1',
        },

    ];



    const label = { inputProps: { 'aria-label': 'Switch demo' } };





    return (
        <Box>
            <TableContainer className={classes.tableContainer}>
                <Table sx={{ minWidth: 650, backgroundColor: '#fff', border: '1px solid #DCDCEB', borderRadius: '8px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#E8F7FF' }}>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>User</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Level1</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Level2</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Level3</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Earning</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }} align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody style={{ alignItems: 'center' }}>

                        {TableList.map((item, index) => (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                <>
                                    <TableCell sx={{ borderBottom: '1px solid #DCDCEB',   color: '#fff' }} component="th" scope="row">
                                        <Typography color="#000">{item.User}</Typography>
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: '1px solid #DCDCEB',   color: '#fff' }} component="th" scope="row">
                                        <Typography color="#000">{item.level}</Typography>
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: '1px solid #DCDCEB',   color: '#fff' }} component="th" scope="row">
                                        <Typography color="#000">{item.level}</Typography>
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: '1px solid #DCDCEB',   color: '#fff' }} component="th" scope="row">
                                        <Typography color="#000">{item.level}</Typography>
                                    </TableCell>

                                    <TableCell sx={{ borderBottom: '1px solid #DCDCEB',  color: '#fff' }} component="th" scope="row">
                                        <Typography color="#000">{item.Earning}</Typography>
                                    </TableCell>

                                    <TableCell align="right" sx={{ borderBottom: '1px solid #DCDCEB',   color: '#fff' }} component="th" scope="row">
                                    <Switch {...label} defaultChecked />
                                    </TableCell>
                                </>



                            </TableRow>
                        ))}



                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Protable;


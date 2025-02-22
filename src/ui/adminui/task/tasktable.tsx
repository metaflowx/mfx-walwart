'use client'
import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import r2 from '../../icons/r2.svg'
import { makeStyles } from '@mui/styles';
import Image from "next/image";




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

const Tasktable = () => {
    const classes = useStyles();

    // const queryClient = useQueryClient()
    // const { data: blockNumber } = useBlockNumber({ watch: true })

    // const TableList = [
    //     {
    //         id: 1,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Starter',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 2,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Silver',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 3,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Gold',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 4,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Platinum',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 5,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Daimond',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },
    //     {
    //         id: 6,
    //         Userprofile: mmct,
    //         ProfileAddress: "0xcc5...be31",
    //         stakeAmount: 8000,
    //         stakeDate: '0.00',
    //         reward: '100',
    //         rewardData: '0.00',
    //         startTime: 'Jun 12 2024 23:11:38 PM',
    //         lastClaim: 'Jun 12 2024 23:11:38 PM',
    //         tier: 'Elite',
    //         tri365d: '1000',
    //         tcr: '100',
    //         rr: '10'
    //     },

    // ];









    return (
        <Box>
            <TableContainer className={classes.tableContainer}>
                <Table sx={{ minWidth: 650, backgroundColor: '#fff', border: '1px solid #DCDCEB', borderRadius: '8px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#E8F7FF' }}>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>User</TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody style={{ alignItems: 'center' }}>


                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ borderBottom: '1px solid #1D1D20', padding: 1, color: '#fff' }} component="th" scope="row">
                                <Typography color="#000">hhh</Typography>
                            </TableCell>


                        </TableRow>




                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Tasktable;


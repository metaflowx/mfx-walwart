'use client'

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, FormControlLabel, Switch } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";

const useStyles = makeStyles({
    tableContainer: {
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
    }
});

const TableList = [
    {
        id: 1,
        User: "Js Reigns",
        emailorphone: 'xyz@gmail.com',
        status: 'complete',
        joiningDate:'01-02-2024',
        Earning: "0.00",
    },
    {
        id: 2,
        User: "Js Reigns",
        emailorphone: 'xyz@gmail.com',
        status: 'complete',
        joiningDate:'01-02-2024',
        Earning: "0.00",
    },
    {
        id: 3,
        User: "Js Reigns",
        emailorphone: '9135627788',
        status: 'complete',
        joiningDate:'01-02-2024',
        Earning: "0.00",
    },
    {
        id: 4,
        User: "Js Reigns",
        emailorphone: 'xyz@gmail.com',
        status: 'complete',
        joiningDate:'01-02-2024',
        Earning: "0.00",
    },
    {
        id: 5,
        User: "Js Reigns",
        emailorphone: '9135378000',
        status: 'complete',
        joiningDate:'01-02-2024',
        Earning: "0.00",
    },
 
];

const Tasktable = () => {
    const classes = useStyles();


    const [checkedState, setCheckedState] = useState<{ [key: number]: boolean }>(
        TableList.reduce((acc, item) => ({ ...acc, [item.id]: true }), {})
    );


    const handleChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedState(prevState => ({
            ...prevState,
            [id]: event.target.checked
        }));
        console.log(`User ID: ${id} is now ${event.target.checked ? "Unblocked" : "Blocked"}`);
    };

    return (
        <Box>
            <TableContainer className={classes.tableContainer}>
                <Table sx={{ minWidth: 650, backgroundColor: '#fff', border: '1px solid #DCDCEB', borderRadius: '8px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#E8F7FF' }}>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Id</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Email/Phone</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Status</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Joining Date</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }}>Earning</TableCell>
                            <TableCell sx={{ borderBottom: '1px solid #DCDCEB', fontSize: 16, color: '#0071CE' }} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {TableList.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Typography color="#000">{item.id}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="#000">{item.emailorphone}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="#000">{item.status}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="#000">{item.joiningDate}</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="#000">{item.Earning}</Typography>
                                </TableCell>
                                <TableCell align="right">
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={checkedState[item.id]}
                                                onChange={handleChange(item.id)}
                                            />
                                        }
                                        label={checkedState[item.id] ? "Unblocked" : "Blocked"}
                                        sx={{ color: '#000' }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Tasktable;

'use client'
import useReferralList from "@/app/customHooks/useReferralList";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, FormControlLabel, Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTableContainer = styled(TableContainer)({
    '&::-webkit-scrollbar': {
        width: '12px',
    },
    '&::-webkit-scrollbar-track': {
        background: '#E8F7FF',
        borderRadius: '0px',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#0071CE',
        borderRadius: '10px',
        border: '1px solid #0071CE',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: 'red',
    },
});



const Tasktable = () => {
   const {referralList}=useReferralList()

  console.log(">>>>>>>>>>>referralList",referralList);
  

    return (
        <Box>
            <StyledTableContainer>
                <Table sx={{ minWidth: 650, backgroundColor: '#fff', border: '1px solid #DCDCEB', borderRadius: '8px' }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#E8F7FF' }}>
                        <TableRow>
                            <TableCell sx={{ fontSize: 16, color: '#0071CE' }}>User</TableCell>
                            <TableCell sx={{ fontSize: 16, color: '#0071CE' }}>Level1</TableCell>
                            <TableCell sx={{ fontSize: 16, color: '#0071CE' }}>Level2</TableCell>
                            <TableCell sx={{ fontSize: 16, color: '#0071CE' }}>Level3</TableCell>
                            <TableCell sx={{ fontSize: 16, color: '#0071CE' }}>Earning</TableCell>
                            {/* <TableCell sx={{ fontSize: 16, color: '#0071CE' }} align="right">Action</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {referralList.map((item:any) => (
                            <TableRow key={item._id}>
                                <TableCell><Typography color="#000">{item?.userId?.email ||item?.userId?.mobileNumber }</Typography></TableCell>
                                <TableCell>
                                    {/* <Typography color="#000">{item.referralStats?.levels?.level1?.earnings}</Typography> */}
                                    <Typography color="#999">${item.referralStats?.levels?.level1?.earnings}</Typography>
                                </TableCell>
                                <TableCell>
                                    {/* <Typography color="#000">{item.level2}</Typography> */}
                                    <Typography color="#999">${item.referralStats?.levels?.level2?.earnings}</Typography>
                                </TableCell>
                                <TableCell>
                                    {/* <Typography color="#000">{item.level3}</Typography> */}
                                    <Typography color="#999">${item.referralStats?.levels?.level3?.earnings}</Typography>
                                </TableCell>
                                <TableCell><Typography color="#000">{item?.totalEarnings}</Typography></TableCell>
                                {/* <TableCell align="right">
                                    <FormControlLabel
                                        control={<Switch checked={checkedState[item.id]} onChange={handleChange(item.id)} />}
                                        label={checkedState[item.id] ? "Unblocked" : "Blocked"}
                                        sx={{ color: '#000' }}
                                    />
                                </TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </StyledTableContainer>
        </Box>
    );
}

export default Tasktable;
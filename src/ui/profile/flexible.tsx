

import { Box, Button, Typography } from "@mui/material";
import Clicktoback from "./clicktoback";
import NoData from "./noData";
import CustomButton from "./custombutton";
import DropdownList from "./dropdownList";


const Flexible = () => {


    return (
        <>
            <Box>
                <Clicktoback href={"/dashboard/profile"} title={"Flexible"} />

                <Box sx={{
                    border: '1px solid #1DAEFF',
                    borderRadius: '12px',
                    padding: '1rem',
                    marginTop: '1rem',
                    boxShadow: '0px 6px 18px -8px #0000005e',
                }}>
                    <Box mb={1}>
                        <Typography color="#000">Total Assets(USDT)</Typography>
                        <Typography color="#000" fontWeight={700} variant="h6">0.00</Typography>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem',
                        flexWrap:'wrap'
                    }}>
                        <CustomButton href={""} title={"Recharge"} />
                        <CustomButton href={""} title={"InvestPlus"} />
                        <CustomButton href={""} title={"Withdraw"} />
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography>Asset Details</Typography>
                    </Box>
                    <DropdownList />
                </Box>
                <NoData />
            </Box>
        </>
    )
}

export default Flexible
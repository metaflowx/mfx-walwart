import { Box, Typography } from "@mui/material"

import Clicktoback from "./clicktoback"
import CustomButton from "./custombutton"
import DropdownList from "./dropdownList"
import NoData from "./noData"

 


const UnlockRecored = () => {
    return (
        <>
            <Box>
                <Clicktoback href={"/dashboard/profile"} title={"Unlock Records"} />

                <Box sx={{
                    border: '1px solid #1DAEFF',
                    borderRadius: '12px',
                    padding: '1rem',
                    marginTop: '1rem',
                    boxShadow: '0px 6px 18px -8px #0000005e',
                }}>
                    <Box mb={1}>
                        <Typography color="#119F3E">Efficient</Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent:'space-between'
                        }}>
                            <Typography color="#000">VIP 0</Typography>
                            <Typography color="#FF0000"> -0.000000USDT</Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent:'space-between',
                            mt:1
                        }}>
                            <Typography color="#000">Unlock Time</Typography>
                            <Typography color="#000">2025/02/10 19:15:57</Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            justifyContent:'space-between',
                            mt:1
                        }}>
                            <Typography color="#000">Expiration time</Typography>
                            <Typography color="#000">2025/02/20 19:15:57</Typography>
                        </Box>
                    </Box>

                </Box>


            </Box>
        </>
    )
}

export default UnlockRecored
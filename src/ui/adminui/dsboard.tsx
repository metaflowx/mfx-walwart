import { Box, Typography } from "@mui/material"
import UserTable from "./user/userTable"
import Dscard from "./dscard"

 

 

 

const Dsboard = () => {
 

    

    return (
        <>
            <Box sx={{
            padding:'2rem',
            '@media(max-width : 600px)':{
                padding:'0.5rem'
            }
        }}>
                <Dscard/>
                <UserTable/>
                
            </Box>

        </>
    )
}

export default Dsboard
import { Box } from "@mui/material"
import UserTable from "./userTable"
 
 
 
 
 

const User=()=>{
    return(
        <>
        <Box sx={{
            padding:'2rem',
            '@media(max-width : 600px)':{
                padding:'0.5rem'
            }
        }}>
            <UserTable/>
        </Box>
        </>
    )
}

export default User
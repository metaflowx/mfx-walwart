import { Box } from "@mui/material"
import Protable from "./protable"
 
 
 

const Profile=()=>{
    return(
        <>
        <Box sx={{
            padding:'2rem',
            '@media(max-width : 600px)':{
                padding:'0.5rem'
            }
        }}>
            <Protable/>
        </Box>
        </>
    )
}

export default Profile
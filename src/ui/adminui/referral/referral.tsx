import { Box } from "@mui/material"
import Tasktable from "./tasktable"
 

const Referral=()=>{
    return(
        <>
        <Box sx={{
            padding:'2rem',
            '@media(max-width : 600px)':{
                padding:'0.5rem'
            }
        }}>
         
            <Tasktable/>
        </Box>
        </>
    )
}

export default Referral
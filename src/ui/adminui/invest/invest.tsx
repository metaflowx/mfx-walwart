import { Box } from "@mui/material"
import Todolist from "./todolist"
 
 

const Invest=()=>{
    return(
        <>
        <Box sx={{
            padding:'2rem',
            '@media(max-width : 600px)':{
                padding:'0.5rem'
            }
        }}>
            <Todolist/>
        </Box>
        </>
    )
}

export default Invest
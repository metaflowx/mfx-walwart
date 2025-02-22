import { Box } from "@mui/material"
import Tasktable from "./tasktable"
import Todolist from "./todolist"

const Task=()=>{
    return(
        <>
        <Box sx={{
            padding:'2rem',
            '@media(max-width : 600px)':{
                padding:'0.5rem'
            }
        }}>
            <Todolist/>
            {/* <Tasktable/> */}
        </Box>
        </>
    )
}

export default Task
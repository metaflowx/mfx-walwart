'use client'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MenuItem, TextField, styled, useTheme } from '@mui/material';
import { useContext, useState } from 'react';
import NoData from '../profile/noData';





const StyledBox = styled('form')(({ theme }) => ({

}));


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </Box>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}





export default function roundTab() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ width: '100%', }}>


            <Box pt={2}>
               
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid #DCDCEB',
                       
                    }}>
                        <Typography variant='h6'>Walmart Team Announcement</Typography>
                        <Typography>2025/03/04 21:30:00</Typography>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box sx={{
                        marginTop:'1rem'
                    }}>
                    <NoData />
                    </Box>
                </CustomTabPanel>


            </Box>
        </Box>
    );
}
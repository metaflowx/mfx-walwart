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


            <Box>
                <Box sx={{ textTransform: 'capitalize', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap-reverse', gap: '1rem' }}>
                    <Tabs
                        variant="scrollable"
                        sx={{

                            display: 'inline-block',
                            padding: '5px 7px 1px 7px',
                            borderRadius: '6px',
                            '@media(max-width : 600px)': {
                                width: '100%',
                            },
                            '.MuiTabs-indicator': {
                                height: 46,
                                color: '#fff',
                                background: 'linear-gradient(0deg, #0071CE, #0071CE)',
                                borderRadius: '30px',
                                backgroundColor: 'transparent'

                            },
                            '.Mui-selected': {
                                color: "#fff !important",
                                textTransform: 'capitalize',
                                zIndex: '1',
                            }
                        }} value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab sx={{ textTransform: 'capitalize', color: '#0071CE' }} label="Announcement" {...a11yProps(0)} />
                        <Tab sx={{ textTransform: 'capitalize', color: '#0071CE' }} label="Message"  {...a11yProps(1)} />
                    </Tabs>

                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box sx={{
                        padding: '1rem',
                        borderRadius: '12px',
                        border: '1px solid #DCDCEB',
                        marginTop:'1rem'
                    }}>
                        <Typography variant='h6'>ACPINC Team Announcement</Typography>
                        <Typography>2024/10/09 21:30:00</Typography>
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
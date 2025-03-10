"use client"
import { Box, IconButton, Snackbar, Typography, styled } from "@mui/material";
import copy from 'clipboard-copy';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Link from "next/link";
import React, { useState } from "react";


interface props {
    text?: string;
    textColor?: string;
    addresstext?: string;
    hrefLink?: string;

}
const StyledBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'inherit',
    borderRadius: '4px',
    backgroundColor:'#fff',
    padding:'5px 10px'
}));

const StyledLink = styled(Box)(({ theme }) => ({
    textDecoration: 'none',
    color: '#000 !important',
    fontWeight: 500,
    fontSize: '17px !important',
    '@media(max-width : 600px)': {
        fontSize: '13px !important',
    }
}));

const AddressCopy = ({ text, textColor, addresstext }: props) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopy = () => {
        copy(addresstext ? addresstext:"");
        setOpenSnackbar(true);
        // alert('Text copied to clipboard!');
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <>
            <StyledBox>
                <StyledLink sx={{ color: textColor }}  >
                    {text}
                </StyledLink>

                <Box onClick={handleCopy}>
                    <ContentCopyIcon sx={{ color: '#000', width: 18 ,cursor:"pointer"}} />
                </Box>
                <Snackbar

                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    open={openSnackbar}
                    autoHideDuration={3000}
                    onClose={handleCloseSnackbar}
                    message="Address copied"

                />
            </StyledBox>
        </>
    );
};

export default AddressCopy;
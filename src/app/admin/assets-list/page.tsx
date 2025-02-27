"use client"
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import AddAssetDialog from './AddAssetDialog';
import AssetsList from './AssetsList';

export default function page() {
     const [open, setOpen] = useState(false);
  return (
    <Box
    sx={{
        padding:'2rem',
        '@media(max-width : 600px)':{
            padding:'0.5rem'
        }
    }}
    >
        <Box 
    sx={{
        margin: "auto",
        padding: 2,
        border: "1px solid #DCDCEB",
        "@media(max-width : 600px)": { padding: "0.5rem" },
      }}
    >
        <Box textAlign={"end"}>
          <Button
            sx={{
              backgroundColor: "#0071CE",
              boxShadow: "none",
              borderRadius: "6px",
            }}
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
             Add Asset
          </Button>
        </Box>
      

            {open && (
                <AddAssetDialog open={open} setOpen={setOpen} />
            )}
            <AssetsList />
    </Box>
    </Box>
  )
}

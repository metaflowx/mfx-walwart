"use client"
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import AddAssetDialog from './AddAssetDialog';
import AssetsList from './AssetsList';
import useAssetsList from '@/app/customHooks/useAssetsList';

export default function page() {
  const { assetsList,loading,refetch } = useAssetsList();
     const [open, setOpen] = useState(false);
     const [editTaskId, setEditTaskId] = useState<number | null>(null);
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
                <AddAssetDialog refetch={refetch} editTaskId={editTaskId} open={open} setOpen={setOpen} />
            )}
            <AssetsList editTaskId={editTaskId} setOpen={setOpen} setEditTaskId={setEditTaskId} assetsList={assetsList} loading={loading} refetch={refetch} />
    </Box>
    </Box>
  )
}

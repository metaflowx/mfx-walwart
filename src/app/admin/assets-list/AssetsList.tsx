"use client"
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import usePackageList from "@/app/customHooks/usePackageList";
import ConfirmationDialog from "@/components/ui/ConfirmationDialog";
import {
  Delete,
  Edit as EditIcon,
  ChangeCircle as ChangeCircleIcon,
} from "@mui/icons-material";
import { Box, IconButton, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useState } from 'react'
import { toast } from "react-toastify";

export default function AssetsList({loading,assetsList,refetch,setEditTaskId,setOpen,editTaskId}:{loading:boolean,assetsList:any,refetch:any,setEditTaskId:any,setOpen:any,editTaskId:any}) {
  const [openDelete, setOpenDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const deltePackage = (data: any) => {
    if (data) {
      setEditTaskId(data?._id);
      setOpenDelete(true);
    }
  };

  const editTask = (data: any) => {
    if (data) {
      setEditTaskId(data)
      setOpen(true)
    }
  };

   const deletePackageHandler = async () => {
      try {
        setIsLoading(true);
        const res = await apiRouterCall({
          method: "DELETE",
          endPoint: "deletePacakage",
          id: editTaskId?.toString(),
        });
        if (res?.status === 200) {
          toast.success(res.data.message);
  
          setOpenDelete(false);
          setIsLoading(false);
          refetch();
        } else {
          toast.error(res?.data.message);
          setIsLoading(false);
        }
      } catch (error: any) {
        toast.error(error?.response?.data.message);
        setIsLoading(false);
      }
    };
   
  return (
    <div>
        {openDelete && (
        <ConfirmationDialog
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          onConfirm={() => deletePackageHandler()}
          title="Delete Confirmation"
          des="Are you sure want to delete this assets?"
          isLoading={isLoading}
        />
      )}
       <TableContainer sx={{ marginTop: 2 }}>
  <Table sx={{ border: "1px solid #DCDCEB" }}>
    <TableHead>
      <TableRow sx={{ backgroundColor: "#E8F7FF" }}>
      <TableCell>Chain Id</TableCell>

        <TableCell>Assets Name</TableCell>
        <TableCell>Asset Type</TableCell>
        <TableCell>Symbol</TableCell>
        <TableCell align="center">Withdrawal Enabled</TableCell>
        <TableCell align="center">Deposit Enabled</TableCell>
        <TableCell align="center">Max Withdrawal Amount</TableCell>
        <TableCell align="center">Min Withdrawal Amount</TableCell>

        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>

    <TableBody>
      {loading ? (
        Array.from(new Array(5)).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton variant="text" width={120} />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" width={80} />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" width={80} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="text" width={60} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="text" width={80} />
            </TableCell>
            <TableCell align="center">
              <Skeleton variant="text" width={80} />
            </TableCell>
            <TableCell align="right">
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="circular" width={32} height={32} />
            </TableCell>
          </TableRow>
        ))
      ) : (
        assetsList &&
        assetsList.map((task: any) => (
          <TableRow key={task.id}>
            <TableCell>{task.chainId}</TableCell>

            <TableCell
             
            >
              {task.name}
            </TableCell>
            <TableCell>{task.assetType}</TableCell>
            <TableCell>{task.symbol}</TableCell>

            <TableCell>{task.withdrawalEnabled ? "Yes":"No" }</TableCell>
            <TableCell align="center">{task.depositEnabled ? "Yes":"No"}</TableCell>
           
            <TableCell align="center">{task.maxWithdrawalAmount}</TableCell>
            <TableCell align="center">{task.minWithdrawalAmount}</TableCell>

            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                  justifyContent: "end",
                }}
              >
                <IconButton color="error" onClick={() => deltePackage(task)}>
                  <Delete />
                </IconButton>
                <IconButton color="info" onClick={() => editTask(task)}>
                  <EditIcon />
                </IconButton>
              </Box>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
</TableContainer>

        {!loading && assetsList && assetsList.length===0 && (

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <Typography color="#fff" >Data not found</Typography>
          </Box>

        )}
    </div>
  )
}

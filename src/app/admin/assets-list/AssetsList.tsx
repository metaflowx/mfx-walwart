import usePackageList from "@/app/customHooks/usePackageList";
import {
    Delete,
    Edit as EditIcon,
    ChangeCircle as ChangeCircleIcon,
  } from "@mui/icons-material";
import { Box, IconButton, Skeleton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function AssetsList() {
    const { packageList,loading } = usePackageList();
  return (
    <div>
       <TableContainer sx={{ marginTop: 2 }}>
  <Table sx={{ border: "1px solid #DCDCEB" }}>
    <TableHead>
      <TableRow sx={{ backgroundColor: "#E8F7FF" }}>
        <TableCell>Package Name</TableCell>
        <TableCell>Amount</TableCell>
        <TableCell>Daily Earnings</TableCell>
        <TableCell align="center">Duration In Days</TableCell>
        <TableCell align="center">Total Returns</TableCell>
        <TableCell align="center">Bonus</TableCell>
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
        packageList &&
        packageList.map((task: any) => (
          <TableRow key={task.id}>
            <TableCell
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.name}
            </TableCell>
            <TableCell>${task.amount}</TableCell>
            <TableCell>${task.dailyEarnings}</TableCell>
            <TableCell align="center">{task.durationInDays}</TableCell>
            <TableCell align="center">${task.totalReturns}</TableCell>
            <TableCell align="center">${task.bonus}</TableCell>
            <TableCell align="right">
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                  justifyContent: "end",
                }}
              >
                {/* <IconButton color="error" onClick={() => deltePackage(task)}>
                  <Delete />
                </IconButton>
                <IconButton color="info" onClick={() => editTask(task)}>
                  <EditIcon />
                </IconButton> */}
              </Box>
            </TableCell>
          </TableRow>
        ))
      )}
    </TableBody>
  </Table>
</TableContainer>

        {!loading && packageList && packageList.length===0 && (

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <Typography color="#fff" >Data not found</Typography>
          </Box>

        )}
    </div>
  )
}

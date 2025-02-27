"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  TextField,
  Button,
  Modal,
  Box,
  CircularProgress,
  Typography,
  Skeleton,
} from "@mui/material";
import {
  Delete,
  Edit as EditIcon,
  ChangeCircle as ChangeCircleIcon,
} from "@mui/icons-material";
import { toast } from "react-toastify";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import ConfirmationDialog from "@/components/ui/ConfirmationDialog";
import usePackageList from "@/app/customHooks/usePackageList";

export default function Todolist() {
  const { packageList,loading, refetch } = usePackageList();

  const [newTask, setNewTask] = useState({
    name: "",
    amount: "",
    dailyEarnings: "",
    durationInDays: "",
    totalReturns: "",
    bonus: "",
    description: "",

  });
 
  const [errors, setErrors] = useState({
    name: "",
    amount: "",
    dailyEarnings: "",
    durationInDays: "",
    totalReturns: "",
    bonus: "",
    description:""
  });
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditTaskId(null);
    setNewTask({
      name: "",
      amount: "",
      dailyEarnings: "",
      durationInDays: "",
      totalReturns: "",
      bonus: "",
      description:""
    });
    
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const deltePackage = (data: any) => {
    if (data) {
      setEditTaskId(data?._id);
      setOpenDelete(true);
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
        refetch()
      } else {
        toast.error(res?.data.message);
        setIsLoading(false);
      }
    } catch (error: any) {
      toast.error(error?.response?.data.message);
      setIsLoading(false);
    }
  };
  const validateFields = () => {
    let tempErrors: any = {};
    if (!newTask.name) tempErrors.name = "Name is required";
    if (!newTask.description) tempErrors.description = "Description is required";

    if (!newTask.amount || isNaN(Number(newTask.amount))) tempErrors.amount = "Valid amount is required";
    if (!newTask.dailyEarnings || isNaN(Number(newTask.dailyEarnings))) tempErrors.dailyEarnings = "Valid daily earnings required";
    if (!newTask.durationInDays || isNaN(Number(newTask.durationInDays))) tempErrors.durationInDays = "Valid duration required";
    if (!newTask.totalReturns || isNaN(Number(newTask.totalReturns))) tempErrors.totalReturns = "Valid total returns required";
    if (!newTask.bonus || isNaN(Number(newTask.bonus))) tempErrors.bonus = "Valid bonus required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };
  const createPackage = async () => {
    if (!validateFields()) return;
    try {
      setIsLoading(true);
      const res = await apiRouterCall({
        method: editTaskId ? "PUT" : "POST",
        endPoint: editTaskId ? "editPacakage" : "addPacakage",
        data: newTask,
        id: editTaskId || undefined,
      });
      if (res?.status === 200) {
        toast.success(res.data.message);
        handleClose();
        refetch()
      } else {
        toast.error(res?.data.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  const editTask = (data: any) => {
    if (data) {
      setNewTask({
        name: data.name,
        amount: data.amount,
        dailyEarnings: data.dailyEarnings,
        durationInDays: data.durationInDays,
        totalReturns: data.totalReturns,
        bonus: data.bonus,
        description:data?.description
      
      });
      setEditTaskId(data?._id);
      handleOpen();
    }
  };

  return (
    <>
      {openDelete && (
        <ConfirmationDialog
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          onConfirm={() => deletePackageHandler()}
          title="Delete Confirmation"
          des="Are you sure want to delete this package?"
          isLoading={isLoading}
        />
      )}
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
            onClick={handleOpen}
          >
            Add Investment Plan
          </Button>
        </Box>

        <Modal open={open} onClose={handleClose}   >
        <Box  sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {xs:"100%", sm:500},
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}>
          <TextField label="Package Name" name="name" fullWidth value={newTask.name} onChange={handleInputChange} error={!!errors.name} helperText={errors.name} />
          <TextField label="Amount" name="amount" fullWidth value={newTask.amount} onChange={handleInputChange} error={!!errors.amount} helperText={errors.amount} />
          <TextField label="Daily Earnings" name="dailyEarnings" fullWidth value={newTask.dailyEarnings} onChange={handleInputChange} error={!!errors.dailyEarnings} helperText={errors.dailyEarnings} />
          <TextField label="Duration (Days)" name="durationInDays" fullWidth value={newTask.durationInDays} onChange={handleInputChange} error={!!errors.durationInDays} helperText={errors.durationInDays} />
          <TextField label="Total Returns" name="totalReturns" fullWidth value={newTask.totalReturns} onChange={handleInputChange} error={!!errors.totalReturns} helperText={errors.totalReturns} />
          <TextField label="Bonus" name="bonus" fullWidth value={newTask.bonus} onChange={handleInputChange} error={!!errors.bonus} helperText={errors.bonus} />
          <TextField label="Description" name="description" fullWidth value={newTask.description} onChange={handleInputChange} error={!!errors.description} helperText={errors.description} />

          <Button variant="contained" color="primary" onClick={createPackage} sx={{ mt: 2 }}>
          {isLoading ? <CircularProgress size={24} style={{ color: "#fff" }} /> :(
            <>
             {editTaskId !== null ? "Update Task" : "Add Task"}
            </>
          ) } 
          </Button>
        </Box>
      </Modal>

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

        {!loading && packageList && packageList.length===0 && (

          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
            <Typography color="#fff" >Data not found</Typography>
          </Box>

        )}
      </Box>
    </>
  );
}

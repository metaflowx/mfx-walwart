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
  IconButton,
  Button,
  Modal,
  Box,
  CircularProgress,
  Typography,
  TablePagination,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { apiRouterCall } from "@/app/ApiConfig/Services/Index";
import { toast } from "react-toastify";
import taskListData from "@/app/customHooks/taskList";
import ConfirmationDialog from "@/components/ui/ConfirmationDialog";

export default function Todolist() {
  const { taskList, loading, refetch } = taskListData();
  const [isLoading, setIsLoading] = useState(false);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const deleteTaskHandler = async () => {
    try {
      setIsLoading(true);
      const res = await apiRouterCall({
        method: "DELETE",
        endPoint: "delete",
        id: editTaskId?.toString(),
      });
      if (res?.status === 200) {
        toast.success(res.data.message);
        refetch();
        setOpenDelete(false);
      } else {
        toast.error(res?.data.message);
      }
    } catch (error: any) {
      toast.error(error?.response?.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ margin: "auto", padding: 2, border: "1px solid #DCDCEB" }}>
      {openDelete && (
        <ConfirmationDialog
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          onConfirm={deleteTaskHandler}
          title="Delete Confirmation"
          des="Are you sure want to delete this task?"
          isLoading={isLoading}
        />
      )}
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table sx={{ border: "1px solid #DCDCEB" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#E8F7FF" }}>
              <TableCell>User</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {taskList &&
              taskList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task: any) => (
                <TableRow key={task.id}>
                  <TableCell>
                    {task.image && <img src={task.image} alt="Task" style={{ width: 40, height: 40 }} />}
                  </TableCell>
                  <TableCell>{task.title}</TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell align="center">{task.status}</TableCell>
                  <TableCell align="right">
                    <IconButton color="error" onClick={() => { setEditTaskId(task.id); setOpenDelete(true); }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {taskList && taskList.length >0 && (

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={taskList?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      )}
      {!loading && taskList && taskList.length === 0 && (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Typography color="#fff">Data not found</Typography>
        </Box>
      )}
    </Box>
  );
}

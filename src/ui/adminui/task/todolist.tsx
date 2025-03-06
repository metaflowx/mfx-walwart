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
  TextField,
  Skeleton,
} from "@mui/material";
import {
  Delete,
  Edit as EditIcon,
  ChangeCircle as ChangeCircleIcon,
} from "@mui/icons-material";
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
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [imageFile, setImageFile] = useState("");
  const [newTask, setNewTask] = useState({
    title: "",
    type: "",
    description: "",
    image: "",
    points: "5",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };
  const handleOpen = () => setOpen(true);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleClose = () => {
    setOpen(false);
    setNewTask({
      title: "",
      type: "",
      description: "",
      image: "",
      points: "5",
    });
    setEditTaskId(null);

    setImagePreview(null);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleImageUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e?.target?.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const formDataImage = new FormData();
      formDataImage.append("image", file);
      
      // Check if an image is selected
   
        const res = await apiRouterCall({
          method: "POST",
          endPoint: "uploadImage",
          data: formDataImage,
        });
        if (res?.status === 200) {
          setNewTask({...newTask,image:res.data.url});
        }
      setImagePreview(imageUrl);
    }
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

  const createTask = async () => {
    try {
      setIsLoading(true);
     

      const res = await apiRouterCall({
        method: editTaskId ? "PUT" : "POST",
        endPoint: editTaskId ? "edit" : "createTask",
        data: newTask,
        id: editTaskId ? editTaskId : undefined,
      });

      if (res?.status === 200) {
        toast.success(res.data.message);
        refetch();
        handleClose();
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
        title: data.title,
        type: data.type,
        description: data.description,
        image: data.image,
        points: "5",
      });
      setImagePreview(data.image);

      setEditTaskId(data?._id);
      handleOpen();
    }
  };

  return (
    <Box sx={{ margin: "auto", padding: 2, border: "1px solid #DCDCEB" }}>
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
          Add Task
        </Button>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
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
          }}
        >
          <TextField
           disabled={isLoading}
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            value={newTask.title}
            onChange={handleInputChange}
          />
          <TextField
           disabled={isLoading}
            label="Type"
            name="type"
            variant="outlined"
            fullWidth
            value={newTask.type}
            onChange={handleInputChange}
          />
          <TextField
           disabled={isLoading}
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={newTask.description}
            onChange={handleInputChange}
          />
          <input  disabled={isLoading} type="file" accept="image/*" onChange={handleImageUpload} />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                width: 100,
                height: 100,
                objectFit: "cover",
                marginTop: 10,
              }}
            />
          )}
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading}
            onClick={() => {
              createTask();
            }}
          >
            {isLoading ? (
              <CircularProgress size={24} style={{ color: "#fff" }} />
            ) : (
              <>{editTaskId !== null ? "Update Task" : "Add Task"}</>
            )}
          </Button>
          <Button
              variant="contained"
              color="primary"
              disabled={isLoading}
              onClick={()=>handleClose()}
             
            >
             Close
            </Button>
        </Box>
      </Modal>
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
                  <TableCell>
                    <Skeleton variant="text" width={60} />
                  </TableCell>

                  <TableCell align="center">
                    <Skeleton variant="text" width={80} />
                  </TableCell>
                  <TableCell align="right" style={{ display: "flex" }}>
                    <Skeleton variant="circular" width={32} height={32} />
                    <Skeleton variant="circular" width={32} height={32} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <>
                {taskList &&
                  taskList
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((task: any) => (
                      <TableRow key={task.id}>
                        <TableCell>
                          {task.image && (
                            <img
                              src={task.image}
                              alt="Task"
                              style={{ width: 40, height: 40 }}
                            />
                          )}
                        </TableCell>
                        <TableCell>{task.title}</TableCell>
                        <TableCell>{task.type}</TableCell>
                        <TableCell>{task.description}</TableCell>
                        <TableCell align="center">{task.status}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            color="error"
                            onClick={() => {
                              setEditTaskId(task?._id);
                              setOpenDelete(true);
                            }}
                          >
                            <Delete />
                          </IconButton>
                          <IconButton
                            color="info"
                            onClick={() => editTask(task)}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {taskList && taskList.length > 0 && (
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="#fff">Data not found</Typography>
        </Box>
      )}
    </Box>
  );
}

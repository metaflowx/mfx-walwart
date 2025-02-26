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
  const { taskList,loading, refetch } = taskListData();
  const [isLoading, setIsLoading] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    type: "",
    description: "",
    image: "",
    points: "5",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditTaskId(null);

    setImagePreview(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: any = e?.target?.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewTask({ ...newTask, image: file });
      setImagePreview(imageUrl);
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

  const delteTask = (data: any) => {
    if (data) {
      setEditTaskId(data?._id);
      setOpenDelete(true);
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
        setIsLoading(false);
      } else {
        toast.error(res?.data.message);
        setIsLoading(false);
      }
    } catch (error:any) {
      toast.error(error?.response?.data.message);
      setIsLoading(false);
    }
  };
  const createTask = async () => {
    try {
      setIsLoading(true);

      // Check if an image is selected
      if (!newTask.image) {
        toast.error("Please upload an image.");
        return;
      }
      const formData = new FormData();
      formData.append("image", newTask.image);
      formData.append("title", newTask.title);
      formData.append("type", newTask.type);
      formData.append("description", newTask.description);
      formData.append("point", newTask.points);
      const res = await apiRouterCall({
        method: editTaskId ? "PUT" : "POST",
        endPoint: editTaskId ? "edit" : "createTask",
        data: formData,
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

  return (
    <>

    {openDelete && (

      <ConfirmationDialog 
      open={openDelete}
      onClose={()=>setOpenDelete(false)}
      onConfirm={()=>deleteTaskHandler()}
      title="Delete Confirmation"
      des="Are you sure want to delete this task?"
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
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            value={newTask.title}
            onChange={handleInputChange}
          />
          <TextField
            label="Type"
            name="type"
            variant="outlined"
            fullWidth
            value={newTask.type}
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            name="description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={newTask.description}
            onChange={handleInputChange}
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
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
        </Box>
      </Modal>

      <TableContainer sx={{ marginTop: 2 }}>
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
              taskList.map((task: any) => (
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
                  <TableCell
                    style={{
                      textDecoration: task.completed ? "line-through" : "none",
                    }}
                  >
                    {task.title}
                  </TableCell>
                  <TableCell>{task.type}</TableCell>
                  <TableCell>{task.description}</TableCell>
                  <TableCell align="center">{task.status}</TableCell>

                  <TableCell align="right">
                    <Box
                      sx={{
                        display: "flex",
                        gap: "4px",
                        justifyContent: "end",
                      }}
                    >
                      <IconButton
                        color="error"
                        onClick={() => delteTask(task)}
                      >
                        <Delete />
                      </IconButton>
                      {/* <IconButton color="info" onClick={() => editTask(task)}>
                      <EditIcon />
                    </IconButton> */}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {!loading && taskList && taskList.length===0 && (

<Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
  <Typography color="#fff" >Data not found</Typography>
</Box>

)}
    </Box>
    </>
  );
}

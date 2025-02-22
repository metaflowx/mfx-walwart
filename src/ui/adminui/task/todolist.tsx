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
} from "@mui/material";
import { Delete, Edit as EditIcon, ChangeCircle as ChangeCircleIcon } from "@mui/icons-material";

interface Task {
  id: number;
  title: string;
  type: string;
  description: string;
  image?: string;
  completed: boolean;
  status: "In Progress" | "Completed";
}

export default function Todolist() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState({
    title: "",
    type: "",
    description: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [editTaskId, setEditTaskId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEditTaskId(null);
    setNewTask({ title: "", type: "", description: "", image: "" });
    setImagePreview(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewTask({ ...newTask, image: imageUrl });
      setImagePreview(imageUrl);
    }
  };

  const saveTask = () => {
    if (!newTask.title.trim()) return;

    if (editTaskId !== null) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editTaskId ? { ...task, ...newTask } : task
        )
      );
      setEditTaskId(null);
    } else {
      setTasks([
        ...tasks,
        { ...newTask, id: Date.now(), completed: false, status: "In Progress" },
      ]);
    }
    handleClose();
  };

  const editTask = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    if (taskToEdit) {
      setNewTask({
        title: taskToEdit.title,
        type: taskToEdit.type,
        description: taskToEdit.description,
        image: taskToEdit.image || "",
      });
      setImagePreview(taskToEdit.image || null);
      setEditTaskId(id);
      handleOpen();
    }
  };

  const changeTaskStatus = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, status: task.status === "In Progress" ? "Completed" : "In Progress" }
          : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box sx={{   
        margin: "auto", 
        padding: 2,border:'1px solid #DCDCEB','@media(max-width : 600px)':{padding: '0.5rem'} }}>
      <Box textAlign={'end'}>
      <Button sx={{
        backgroundColor:'#0071CE',
        boxShadow:'none',
        borderRadius:'6px'
      }} variant="contained" color="primary" onClick={handleOpen}>
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
          <TextField label="Title" name="title" variant="outlined" fullWidth value={newTask.title} onChange={handleInputChange} />
          <TextField label="Type" name="type" variant="outlined" fullWidth value={newTask.type} onChange={handleInputChange} />
          <TextField label="Description" name="description" variant="outlined" fullWidth multiline rows={3} value={newTask.description} onChange={handleInputChange} />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {imagePreview && <img src={imagePreview} alt="Preview" style={{ width: 100, height: 100, objectFit: "cover", marginTop: 10 }} />}
          <Button variant="contained" color="primary" onClick={saveTask}>
            {editTaskId !== null ? "Update Task" : "Add Task"}
          </Button>
        </Box>
      </Modal>

      <TableContainer   sx={{ marginTop: 2 }}>
        <Table sx={{border:'1px solid #DCDCEB'}}>
          <TableHead>
            <TableRow sx={{backgroundColor:'#E8F7FF'}}>
            <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Completed</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.image && <img src={task.image} alt="Task" style={{ width: 40, height: 40 }} />}</TableCell>
                <TableCell style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</TableCell>
                <TableCell>{task.type}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell align="center">{task.status}</TableCell>
                <TableCell align="center">
                  <Checkbox checked={task.completed} onChange={() => changeTaskStatus(task.id)} />
                </TableCell>
                <TableCell align="right">
                  <IconButton color="error" onClick={() => deleteTask(task.id)}><Delete /></IconButton>
                  <IconButton color="info" onClick={() => editTask(task.id)}><EditIcon /></IconButton>
                  <IconButton color="info" onClick={() => changeTaskStatus(task.id)}><ChangeCircleIcon /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

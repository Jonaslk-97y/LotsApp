// src/TasksForm.tsx
import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { collection, addDoc } from "firebase/firestore";
import { db } from './configuration/firebase';

const TasksForm = () => {
  const [task1, setTask1] = useState('');
  const [task2, setTask2] = useState('');
  const [task3, setTask3] = useState('');

  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, "tasks"), {
        task1,
        task2,
        task3,
        createdAt: new Date(),
      });
      setTask1('');
      setTask2('');
      setTask3('');
      alert("Tasks saved successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Error saving tasks!");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Tasks
        </Typography>
        <Box
          component="form"
          sx={{
            width: '100%', // Set the width of the form
            mt: 1, // Add margin top
            '& .MuiTextField-root': {
              m: 1,
              width: '100%',
            },
            '& .MuiButton-root': {
              m: 1,
              width: '100%',
            },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSave}
        >
          <TextField
            required
            id="task1"
            label="Task 1"
            variant="outlined"
            value={task1}
            onChange={(e) => setTask1(e.target.value)}
          />
          <TextField
            required
            id="task2"
            label="Task 2"
            variant="outlined"
            value={task2}
            onChange={(e) => setTask2(e.target.value)}
          />
          <TextField
            required
            id="task3"
            label="Task 3"
            variant="outlined"
            value={task3}
            onChange={(e) => setTask3(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TasksForm;

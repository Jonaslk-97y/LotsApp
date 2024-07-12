import React from 'react';
import Login from './login'; // Make sure the path matches your file structure
import TasksForm from './TasksForm'; // Import the new TasksForm component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Box
          component="header"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 2, // Adjust padding as needed
            backgroundColor: '#282c34',
            color: 'white',
          }}
        >

          <Typography variant="h4" component="h1">
            Do do List
          </Typography>
        </Box>
        <main>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tasks" element={<TasksForm />} /> {/* Add a new route for the task form */}
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

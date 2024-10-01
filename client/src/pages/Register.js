import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, Avatar, Grid, Alert } from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import useRedirectIfAuthenticated from './useRedirectIfAuthenticated';
import ApiConfig from '../utils/ApiConfig';
export const Register = () => {
  useRedirectIfAuthenticated();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State to hold error messages

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    setError(""); // Clear error message when user starts typing
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Frontend validation: Check if any field is missing
    if (!user.name || !user.email || !user.password) {
      setError("All fields are required.");
      return;
    }
  
    // Check password length
    if (user.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
  
    try {
      const response = await fetch(`${ApiConfig.backendUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const resData = await response.json();
  
        // Automatically log in the user by storing the token
        localStorage.setItem("token", resData.token); // Assume resData contains the token
  
        setUser({ name: "", email: "", password: "" });
  
        // Navigate to home page or refresh the page to reflect login state
        window.location.assign("/"); // Full page reload
      } else {
        const resData = await response.json();
        setError(resData.message || "Registration failed.");
      }
    } catch (error) {
      console.log("Register error:", error);
      setError("An error occurred. Please try again later.");
    }
  };
  

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: '#192a36',
          borderRadius: 2,
          p: 4,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#FFC107' }}>
          <PersonAddOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: '#FFC107' }}>
          Registration Form
        </Typography>
        {error && ( // Conditionally render the error message
          <Alert severity="error" sx={{ mt: 2, width: '100%' }}>
            {error}
          </Alert>
        )}
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={user.name}
            onChange={handleInput}
            sx={{
              '& .MuiInputLabel-root': { color: '#FFC107' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#FFC107' },
                '&:hover fieldset': { borderColor: '#FFEB3B' },
                color: '#fff',
              },
              input: { color: '#fff' },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={user.email}
            onChange={handleInput}
            sx={{
              '& .MuiInputLabel-root': { color: '#FFC107' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#FFC107' },
                '&:hover fieldset': { borderColor: '#FFEB3B' },
                color: '#fff',
              },
              input: { color: '#fff' },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            autoComplete="new-password"
            value={user.password}
            onChange={handleInput}
            sx={{
              '& .MuiInputLabel-root': { color: '#FFC107' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: '#FFC107' },
                '&:hover fieldset': { borderColor: '#FFEB3B' },
                color: '#fff',
              },
              input: { color: '#fff' },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3, mb: 2, bgcolor: '#FFC107', color: '#192a36',
              '&:hover': { bgcolor: '#FFEB3B' }
            }}
          >
            Register Now
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={() => navigate('/login')} variant="text" sx={{ color: '#FFC107' }}>
                Already have an account? Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;

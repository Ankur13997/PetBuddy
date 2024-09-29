import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, Avatar, Grid, Alert } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import useRedirectIfAuthenticated from './useRedirectIfAuthenticated';
export const Login = () => {
  useRedirectIfAuthenticated();
  const [user, setUser] = useState({
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
    setError(""); // Clear error message when user types
  };

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation: Check if email and password are provided
    if (!user.email || !user.password) {
      setError("Both email and password are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const resData = await response.json();
        console.log(resData);
        localStorage.setItem("token", resData.token); // Store the JWT token
        setUser({ email: "", password: "" }); // Clear form
        // navigate("/"); // Redirect to the home page
        // window.location.reload();
        window.location.assign("/");
      } else {
        const resError = await response.json();
        setError(resError.message || "Login failed. Please check your email and password."); // Set error message from server
      }
    } catch (error) {
      console.log("Login error:", error);
      setError("An error occurred. Please try again later."); // Generic error message
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
          bgcolor: '#192a36', // Dark blue/gray background
          borderRadius: 2,
          p: 4,
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Darker shadow for depth
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#FFC107' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ color: '#FFC107' }}>
          Login
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
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
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
            Login Now
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={() => navigate('/register')} variant="text" sx={{ color: '#FFC107' }}>
                Don't have an account? Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;

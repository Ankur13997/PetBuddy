import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiConfig from '../utils/ApiConfig';
import {
  Container,
  TextField,
  Button,
  Alert,
  Box,
  Snackbar,
} from "@mui/material";


const AdminAddPet = () => {
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    size: "",
    location: "",
    description: "",
    photos: "",
    adoptionRequirements: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  useEffect(() => {
    const checkAdminStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(
          `${ApiConfig.backendUrl}/api/users/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        
      } catch (error) {
        setError("Error checking admin status");
      }
    };

    checkAdminStatus();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      await axios.post(`${ApiConfig.backendUrl}/api/pets`, formData, config);
      setSuccess("Pet added successfully");

      // Clear the input fields
      setFormData({
        name: "",
        species: "",
        breed: "",
        age: "",
        size: "",
        location: "",
        description: "",
        photos: "",
        adoptionRequirements: "",
      });
    } catch (err) {
      setError("Failed to add pet");
    }
  };

  

  return (
    <>
     
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "#fefbf5", p: 4, borderRadius: 2 }}
      >
        
        
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            mt: 2,
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Species"
            name="species"
            value={formData.species}
            onChange={handleChange}
            required
          />
          <TextField
            label="Breed"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <TextField
            label="Size"
            name="size"
            value={formData.size}
            onChange={handleChange}
            required
          />
          <TextField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <TextField
            label="Photo URL"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
            required
          />
          <TextField
            label="Adoption Requirements"
            name="adoptionRequirements"
            value={formData.adoptionRequirements}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <Button variant="contained" sx={{
            backgroundColor: '#FFC107', // Yellow color
            color: '#192a36', // Dark text color for contrast
            '&:hover': {
              backgroundColor: '#FFEB3B', // Lighter yellow on hover
            },
            width: '100%',
          }} type="submit">
            Add Pet
          </Button>
        </Box>
        <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success">
          Application submitted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error">
          Failed to submit application.
        </Alert>
      </Snackbar>
      </Container>
      
    </>
  );
};

export default AdminAddPet;

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Alert,
  Box,
} from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
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
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const response = await axios.get(
          "http://localhost:5000/api/users/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setIsAdmin(response.data.isAdmin); // Set admin status from user data
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

      await axios.post("http://localhost:5000/api/pets", formData, config);
      setSuccess("Pet added successfully");
    } catch (err) {
      setError("Failed to add pet");
    }
  };

  if (!isAdmin) {
    return (
      <Typography variant="h6">
        You do not have permission to add a pet.
      </Typography>
    ); // Block non-admin users
  }

  return (
    <>
      <Header />
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "#fefbf5", p: 4, borderRadius: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          Add New Pet
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
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
            label="Photo URLs (comma separated)"
            name="photos"
            value={formData.photos}
            onChange={handleChange}
          />
          <TextField
            label="Adoption Requirements"
            name="adoptionRequirements"
            value={formData.adoptionRequirements}
            onChange={handleChange}
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" type="submit">
            Add Pet
          </Button>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default AdminAddPet;

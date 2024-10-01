import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiConfig from '../utils/ApiConfig';
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import { Link } from "react-router-dom";

// Import Material UI Components
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { CheckCircle, Cancel, Delete } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
// Styled Link for modern look
const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.primary.main,
  fontWeight: "bold",
  fontSize: "1.2rem",
  "&:hover": {
    color: theme.palette.primary.dark,
    textDecoration: "underline",
  },
}));

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [pets, setPets] = useState([]);

  const fetchApplications = async () => {
    try {
      const response = await axios.get(
        `${ApiConfig.backendUrl}/api/admin/applications`
      );
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications:", error);
    }
  };

  const fetchPets = async () => {
    try {
      const response = await axios.get(`${ApiConfig.backendUrl}/api/pets`);
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`${ApiConfig.backendUrl}/api/admin/applications/${id}`, {
        status,
      });
      fetchApplications();
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  const deleteApplication = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete(
        `${ApiConfig.backendUrl}/api/admin/applications/${id}`,
        config
      );
      setApplications(applications.filter((app) => app._id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const deletePet = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      await axios.delete(
        `${ApiConfig.backendUrl}/api/admin/delete-pet/${id}`,
        config
      );
      setPets(pets.filter((pet) => pet._id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
    fetchPets();
  }, []);

  return (
    <div>
      <Header />
      <PageHeader title="Admin" imageSrc="/images/blog.png" />

      {/* Modern Styled Links */}
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} md={6}>
          <StyledLink to="/admin/add-pet">Add New Pet</StyledLink>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledLink to="/admin/articles">Manage Articles</StyledLink>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Adoption Applications
          </Typography>
          {applications.map((app) => (
            <Card key={app._id} style={{ marginBottom: "16px" }}>
              <CardContent>
                <Typography variant="h6">Name: {app.name}</Typography>
                <Typography>Email: {app.email}</Typography>
                <Typography>Message: {app.message}</Typography>
                <Typography>Status: {app.status || "Pending"}</Typography>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<CheckCircle />}
                  onClick={() => handleStatusChange(app._id, "approved")}
                >
                  Approve
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<Cancel />}
                  onClick={() => handleStatusChange(app._id, "rejected")}
                  style={{ marginLeft: "10px" }}
                >
                  Reject
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<Delete />}
                  onClick={() => deleteApplication(app._id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Manage Pets
          </Typography>
          {pets.map((pet) => (
            <Card key={pet._id} style={{ marginBottom: "16px" }}>
              <CardContent>
                <Typography variant="h6">Name: {pet.name}</Typography>
                <Typography>Species: {pet.species}</Typography>
                <Typography>Breed: {pet.breed}</Typography>
                <Typography>Age: {pet.age}</Typography>
                <Typography>Location: {pet.location}</Typography>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<Delete />}
                  onClick={() => deletePet(pet._id)}
                >
                  Delete Pet
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default AdminDashboard;

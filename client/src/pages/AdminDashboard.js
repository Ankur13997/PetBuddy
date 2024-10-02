import React, { useEffect, useState } from "react";
import axios from "axios";
import ApiConfig from '../utils/ApiConfig';
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader";
import AdminAddPet from "./AdminAddPet";
import AdminArticles from "./AdminArticles";
import { Card, CardContent, Typography, Grid, Button, List, ListItem, ListItemText, Box } from "@mui/material";
import { CheckCircle, Cancel, Delete } from "@mui/icons-material";




const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("Adoption Applications");
  const [applications, setApplications] = useState([]);
  const [pets, setPets] = useState([]);

  const fetchApplications = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get(`${ApiConfig.backendUrl}/api/admin/applications`, config);
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
      await axios.put(`${ApiConfig.backendUrl}/api/admin/applications/${id}`, { status });
      fetchApplications();
    } catch (error) {
      console.error("Error updating application status:", error);
    }
  };

  const deleteApplication = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`${ApiConfig.backendUrl}/api/admin/applications/${id}`, config);
      setApplications(applications.filter((app) => app._id !== id));
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const deletePet = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`${ApiConfig.backendUrl}/api/admin/delete-pet/${id}`, config);
      setPets(pets.filter((pet) => pet._id !== id));
    } catch (error) {
      console.error("Error deleting pet:", error);
    }
  };

  useEffect(() => {
    fetchApplications();
    fetchPets();
  }, []);

  const renderContent = () => {
    switch (selectedSection) {
      case "Add New Pet":
        return <AdminAddPet />; // Replace with the actual component
      case "Manage Articles":
        return <AdminArticles />; // Replace with the actual component
      case "Adoption Applications":
        return applications.map((app) => (
          <Card key={app._id} style={{ marginBottom: "16px" }}>
            <CardContent>
              <Typography variant="h6">Name: {app.name}</Typography>
              <Typography>Email: {app.email}</Typography>
              <Typography>Message: {app.message}</Typography>
              <Typography>Status: {app.status || "Pending"}</Typography>
              <Button variant="contained" color="success" startIcon={<CheckCircle />} onClick={() => handleStatusChange(app._id, "approved")}>
                Approve
              </Button>
              <Button variant="contained" color="error" startIcon={<Cancel />} onClick={() => handleStatusChange(app._id, "rejected")} style={{ marginLeft: "10px" }}>
                Reject
              </Button>
              <Button variant="contained" color="secondary" startIcon={<Delete />} onClick={() => deleteApplication(app._id)} style={{ marginLeft: "10px" }}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ));
      case "Manage Pets":
        return pets.map((pet) => (
          <Card key={pet._id} style={{ marginBottom: "16px" }}>
            <CardContent>
              <Typography variant="h6">Name: {pet.name}</Typography>
              <Typography>Species: {pet.species}</Typography>
              <Typography>Breed: {pet.breed}</Typography>
              <Typography>Age: {pet.age}</Typography>
              <Typography>Location: {pet.location}</Typography>
              <Button variant="contained" color="error" startIcon={<Delete />} onClick={() => deletePet(pet._id)}>
                Delete Pet
              </Button>
            </CardContent>
          </Card>
        ));
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <PageHeader title="Admin" imageSrc="/images/blog.png" />
      
      <Grid container>
        {/* First Column: Links */}
        <Grid item xs={3}>
          <List>
            {["Add New Pet", "Manage Articles", "Adoption Applications", "Manage Pets"].map((section) => (
              <ListItem
                button
                key={section}
                onClick={() => setSelectedSection(section)}
                style={{
                  backgroundColor: selectedSection === section ? "#e0f7fa" : "inherit", // Highlight selected section
                  borderRadius: "5px",
                }}
              >
                <ListItemText primary={section} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Second Column: Dynamic Content */}
        <Grid item xs={9}>
          <Box p={3}>
            <Typography variant="h4" gutterBottom>
              {selectedSection}
            </Typography>
            {renderContent()}
          </Box>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
};

export default AdminDashboard;

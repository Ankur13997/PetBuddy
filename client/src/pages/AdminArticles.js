import React, { useState, useEffect } from "react";
import ApiConfig from "../utils/ApiConfig";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";

const AdminArticles = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
    image: "",
    createdAt: new Date().toISOString(), // Initialize createdAt
  });
  const [editing, setEditing] = useState(null); // For updating articles
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const fetchArticles = async () => {
    const res = await axios.get(`${ApiConfig.backendUrl}/api/articles`);
    setArticles(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token
      },
    };
    try {
      if (editing) {
        await axios.put(
          `${ApiConfig.backendUrl}/api/articles/${editing}`,
          formData,
          config
        ); // Update article
      } else {
        await axios.post(
          `${ApiConfig.backendUrl}/api/articles`,
          formData,
          config
        ); // Create new article
      }
      fetchArticles();
      setFormData({
        title: "",
        content: "",
        category: "",
        author: "",
        image: "",
        createdAt: new Date().toISOString(),
      });
      setEditing(null);
      setSuccess(true); // Trigger success Snackbar
    } catch (error) {
      console.error("Error submitting article:", error);
      setError(true); // Trigger error Snackbar
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.delete(`${ApiConfig.backendUrl}/api/articles/${id}`, config);
      fetchArticles();
      setSuccess(true); // Trigger success Snackbar on delete
    } catch (error) {
      console.error("Error deleting article:", error);
      setError(true); // Trigger error Snackbar
    }
  };

  const handleEdit = (article) => {
    setEditing(article._id);
    setFormData(article);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: "#fefbf5",
        padding: 4,
        borderRadius: 2,
        marginTop: 4,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginBottom: 4,
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <TextField
          label="Content"
          variant="outlined"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          multiline
          rows={4}
          required
        />
        <TextField
          label="Category"
          variant="outlined"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        />
        <TextField
          label="Author"
          variant="outlined"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
        <TextField
          label="Image URL"
          variant="outlined"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          required
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFD700",
            color: "#fff",
            "&:hover": { backgroundColor: "#FFC107" },
          }}
          type="submit"
        >
          {editing ? "Update Article" : "Add Article"}
        </Button>
      </Box>

      <Typography variant="h5" gutterBottom>
        Articles
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} key={article._id}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Category: {article.category}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Author: {article.author}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {article.content.slice(0, 100)}...
                </Typography>
                <img
                  src={article.image || "/images/cat1.jpg"}
                  alt={article.title}
                  style={{
                    width: "100%", // Ensures the image takes the full width of the card
                    height: "200px", // Fixed height for all images
                    objectFit: "cover", // Ensures the image maintains its aspect ratio and fills the space
                    borderRadius: "4px", // Optional: To give the images rounded corners
                  }}
                />
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {new Date(article.createdAt).toDateString()}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 2,
                  }}
                >
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(article)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "red",
                      borderColor: "red",
                      "&:hover": { backgroundColor: "rgba(255,0,0,0.1)" },
                    }}
                    onClick={() => handleDelete(article._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Action completed successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="error">
          An error occurred. Please try again.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AdminArticles;

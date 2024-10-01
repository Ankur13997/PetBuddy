import React, { useState, useEffect } from "react";
import ApiConfig from '../utils/ApiConfig';
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
} from "@mui/material";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
const AdminArticles = () => {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
    author: "",
  });
  const [editing, setEditing] = useState(null); // For updating articles

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
      setFormData({ title: "", content: "", category: "", author: "" });
      setEditing(null);
    } catch (error) {
      console.error("Error submitting article:", error);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token"); // Retrieve token
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token
      },
    };

    try {
      await axios.delete(`${ApiConfig.backendUrl}/api/articles/${id}`, config);
      fetchArticles();
    } catch (error) {
      console.error("Error deleting article:", error);
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
    <>
      <Header />

      <Container
        maxWidth="md"
        sx={{
          backgroundColor: "#fefbf5",
          padding: 4,
          borderRadius: 2,
          marginTop: 4,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Manage Articles
        </Typography>

        {/* Article Form */}
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
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
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
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            required
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "#fff",
              "&:hover": { backgroundColor: "#FFC107" },
            }} // Yellow color for "Add Article"
            type="submit"
          >
            {editing ? "Update Article" : "Add Article"}
          </Button>
        </Box>

        {/* Articles List */}
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Category: {article.category}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Author: {article.author}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {article.content.slice(0, 100)}...{" "}
                    {/* Limit content preview */}
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
                      }} // Red color for "Delete"
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
      </Container>
      <Footer />
    </>
  );
};

export default AdminArticles;

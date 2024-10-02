import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from "./PageHeader"; // Import your new PageHeader component
import ApiConfig from "../utils/ApiConfig";
const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(`${ApiConfig.backendUrl}/api/articles`);
      setArticles(res.data);
    };
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <PageHeader title="Blog" imageSrc="/images/blog.png" />
      <Container
        maxWidth="lg"
        sx={{ padding: "2rem 0", backgroundColor: "#fefbf5", borderRadius: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          Latest Articles
        </Typography>
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article._id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={article.image || "/images/cat1.jpg"} // Fallback to a default image if no image provided
                  alt={article.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 1,
                    }}
                  >
                    <Typography variant="body2" color="textSecondary">
                      {article.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {new Date(article.createdAt).toDateString()} 
                    </Typography>
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.content.length > 100
                      ? `${article.content.substring(0, 100)}...`
                      : article.content}
                  </Typography>
                </CardContent>
                <Box sx={{ padding: "0 1rem 1rem" }}>
                  <Button
                    component={Link}
                    to={`/article/${article._id}`} // Link to the individual article detail page
                    variant="contained"
                    sx={{
                      backgroundColor: "#f57c00",
                      color: "#fff",
                      "&:hover": { backgroundColor: "#ff9800" },
                    }}
                    fullWidth
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Articles;

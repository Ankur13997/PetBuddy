import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import ApiConfig from "../utils/ApiConfig";
const ArticleDetail = () => {
  const { id } = useParams(); // Extract the article ID from the URL
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await axios.get(`${ApiConfig.backendUrl}/api/articles/${id}`);
      setArticle(res.data);
    };
    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ padding: "2rem 0" }}>
        <Typography variant="h4" gutterBottom>
          {article.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {new Date(article.createdAt).toDateString()} 
        </Typography>
        <Box sx={{ margin: "2rem 0" }}>
          <img
            src={article.image || "/images/petblog.jpg"}
            alt={article.title}
            width="100%"
          />
        </Box>
        <Typography variant="body1" gutterBottom>
          {article.content}
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default ArticleDetail;

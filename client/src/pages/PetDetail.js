import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdoptionForm from './AdoptionForm';
import Header from "./Header";
import Footer from "./Footer";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Paper,
} from '@mui/material';

const PetDetail = () => {
  const { id } = useParams(); // Get the pet ID from the URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchPetDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/pets/${id}`);
      setPet(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error fetching pet details.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPetDetail();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <Header />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px' }}>
        <Card>
          <CardMedia
            component="img"
            height="300"
            image={pet.photos[0]}
            alt={pet.name}
          />
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              {pet.name}
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Description:</strong> {pet.description}
            </Typography>
            <Typography variant="body2">
              <strong>Breed:</strong> {pet.breed}
            </Typography>
            <Typography variant="body2">
              <strong>Location:</strong> {pet.location}
            </Typography>
            <Typography variant="body2">
              <strong>Age:</strong> {pet.age} years old
            </Typography>
            <Typography variant="body2">
              <strong>Species:</strong> {pet.species}
            </Typography>
          </CardContent>
        </Card>
        <Paper style={{ marginTop: '20px', padding: '16px' }}>
          <AdoptionForm petId={pet._id} /> {/* Include AdoptionForm */}
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default PetDetail;

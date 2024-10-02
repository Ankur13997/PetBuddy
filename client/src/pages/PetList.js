import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ApiConfig from '../utils/ApiConfig';
import {
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Paper,
} from '@mui/material';
import Header from "./Header";
import Footer from "./Footer";
import PageHeader from './PageHeader'; 
const PetList = () => {
  const [pets, setPets] = useState([]);
  const [searchParams, setSearchParams] = useState({
    species: '',
    breed: '',
    age: '',
    location: ''
  });

  const fetchPets = useCallback(async () => {
    try {
      const response = await axios.get(`${ApiConfig.backendUrl}/api/pets`, { params: searchParams });
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pet data:', error);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchPets();
  }, [fetchPets]);

  const handleInputChange = (e) => {
    setSearchParams({
      ...searchParams,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <PageHeader title="Pets" imageSrc="/images/blog.png" />
      <Container maxWidth="md" style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Available Pets for Adoption
        </Typography>

        <Paper elevation={3} style={{ padding: '16px', marginBottom: '20px' }}>
          <Typography variant="h6" align="center" gutterBottom>
            Search Filters
          </Typography>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6}>
              <TextField
                label="Species"
                variant="outlined"
                fullWidth
                name="species"
                value={searchParams.species}
                onChange={handleInputChange}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Breed"
                variant="outlined"
                fullWidth
                name="breed"
                value={searchParams.breed}
                onChange={handleInputChange}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Age"
                type="number"
                variant="outlined"
                fullWidth
                name="age"
                value={searchParams.age}
                onChange={handleInputChange}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Location"
                variant="outlined"
                fullWidth
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                color="primary"
              />
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={2}>
          {pets.map((pet) => (
            <Grid item xs={12} sm={6} md={4} key={pet._id}>
              <Card style={{ transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
                <Link to={`/pets/${pet._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pet.photos[0]}
                    alt={pet.name}
                  />
                  <CardContent>
                    <Typography variant="h6" align="center" color="primary">
                      {pet.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Breed: {pet.breed}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Location: {pet.location}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Age: {pet.age} years old
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default PetList;

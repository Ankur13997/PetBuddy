import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const PetMatchmaker = () => {
  return (
    <Box 
      sx={{ 
        p: 5, 
        borderRadius: '10px', 
        my: 5, 
        textAlign: 'center',
      }}
    >
      <Grid container spacing={5} alignItems="center">
        
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Find Your Perfect Pet Match
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Unsure which pet is right for your home? Let our Pet Matchmaker tool help! Answer a few simple questions, and we'll match you with the perfect companion who's waiting just for you.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link} 
            to="/petmatchmaker" 
            sx={{ backgroundColor: '#ff9f1a' }}
          >
            Try Pet Matchmaker
          </Button>
        </Grid>

        {/* Image Section with Modern Look */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              overflow: 'hidden',
              display: 'inline-block',
              borderRadius: '50%', // Change to '50%' for circular shape
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <img 
              src="/images/pet-matchmaker.jpg" // Add the correct image path
              alt="Pet Matchmaker"
              style={{
                width: '50%', // Ensures the image fills the container
                height: 'auto', // Maintain aspect ratio
                borderRadius: '50%', // Change to '50%' for circular shape
                transition: 'transform 0.3s ease-in-out',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PetMatchmaker;

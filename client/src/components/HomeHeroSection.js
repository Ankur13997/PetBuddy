import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomeHeroSection = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: { xs: '30px', md: '60px' }, 
        backgroundColor: '#fff9e6', 
        flexDirection: { xs: 'column', md: 'row' }, 
        minHeight: '65vh' 
      }}
    >
      <Box sx={{ maxWidth: { xs: '100%', md: '50%' }, textAlign: { xs: 'center', md: 'left' } }}>
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
            marginBottom: '20px' 
          }}
        >
          Find Your Perfect Companion Today
        </Typography>
        <Typography sx={{ marginBottom: '40px', fontSize: { xs: '1rem', md: '1.2rem' } }}>
          Welcome to PetBuddy, where every pet deserves a loving home!
        </Typography>
        <Button 
          variant="contained" 
          color="warning" 
          component={Link} 
          to="/pets" 
          sx={{ 
            padding: '10px 20px', 
            fontWeight: 'bold', 
            borderRadius: '5px' 
          }}
        >
          Explore Now
        </Button>
      </Box>
      
      <Box 
        sx={{ 
          maxWidth: { xs: '100%', md: '50%' }, 
          marginTop: { xs: '20px', md: '0' }, 
          display: 'flex', 
          justifyContent: 'center' 
        }}
      >
        <img 
          src="/images/home_logo.jpg" 
          alt="Happy dog" 
          style={{ 
            maxWidth: '100%', 
            height: { xs: '200px', sm: '250px', md: '300px' }, 
            borderRadius: '50% / 30%' 
          }} 
        />
      </Box>
    </Box>
  );
};

export default HomeHeroSection;

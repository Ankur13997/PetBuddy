import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'center', 
        padding: '50px', 
        backgroundColor: '#fff' 
      }}
    >
      <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '50%' } }}>
        <img 
          src="/images/about.png" 
          alt="Woman holding a dog" 
          style={{ 
            maxWidth: '70%', 
            borderRadius: '15px', 
            margin: '0 auto', 
            display: 'block' 
          }} 
        />
      </Box>
      
      <Box sx={{ flex: 1, marginLeft: { md: '30px' }, marginTop: { xs: '20px', md: '0' } }}>
        <Typography 
          variant="h2" 
          sx={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            marginBottom: '20px', 
            textAlign: { xs: 'center', md: 'left' } 
          }}
        >
          Welcome to The Pet Care Company
        </Typography>
        <Typography sx={{ fontSize: '16px', lineHeight: 1.5, marginBottom: '20px' }}>
          At PetBuddy, we are dedicated to finding loving homes for pets in need. Every animal deserves a second chance and a family to call their own. Our commitment extends beyond adoption; we provide resources and support to ensure a smooth transition for both pets and their new owners. Because when pets are loved, they bring joy and happiness to our lives.
        </Typography>
        <Button 
          variant="contained" 
          color="warning" 
          component={Link} 
          to="/about-us" 
          sx={{ padding: '10px 20px', borderRadius: '5px', margin: { xs: '0 auto', md: '0' } }}
        >
          About Us
        </Button>
      </Box>
    </Box>
  );
};

export default WelcomeSection;

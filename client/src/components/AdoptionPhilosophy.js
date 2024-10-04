import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const AdoptionPhilosophy = () => {
  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        padding: { xs: '60px 20px', md: '110px 20px' }, 
        backgroundColor: '#fff' 
      }}
    >
      <Typography variant="h2" sx={{ fontSize: '2.5rem', marginBottom: '10px' }}>
        Our Adoption Philosophy
      </Typography>
      <Typography sx={{ fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
        Our mission is to connect pets in need with families ready to welcome them.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {[
          { src: '/images/home.png', title: 'Loving Homes', text: 'We match pets with caring families for a brighter future.' },
          { src: '/images/heart.png', title: 'Heartfelt Care', text: 'Every pet receives the attention and love they deserve.' },
          { src: '/images/support.png', title: 'Support & Guidance', text: 'Our team is here to help you every step of the way.' },
          { src: '/images/community.png', title: 'Community', text: 'Join a network of pet lovers dedicated to making a difference.' }
        ].map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Box sx={{ textAlign: 'center' }}>
              <img 
                src={item.src} 
                alt={item.title} 
                style={{
                  width: '60px', 
                  height: '60px', 
                  backgroundColor: '#FFA500', 
                  borderRadius: '30%', 
                  padding: '15px' 
                }}
              />
              <Typography variant="h3" sx={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                {item.title}
              </Typography>
              <Typography sx={{ fontSize: '1rem', color: '#666' }}>
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdoptionPhilosophy;

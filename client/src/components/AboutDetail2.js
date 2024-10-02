import React from 'react';
import { Box, Grid, Typography } from '@mui/material';


// Replace with your image path
const imageSrc = "/images/about_2.jpg"; // Assuming the file is saved as dogAndWoman.png

const AboutDetail2 = () => {
  return (
    <Box sx={{ padding: '50px 0', maxWidth: 'lg', margin: '0 auto',  minHeight: '80vh', }}>
      <Grid container spacing={4} alignItems="center">
        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
          Helping Pets Live Happy and Healthy Lives
          </Typography>
          <Typography variant="body1" paragraph>
          With PetBuddy's Adoption Support, even small changes can make a big impact. 
          Whether your pet prefers kibble, raw, or a mix, we guide you in providing the best care. 
          Fresh ingredients and personalized tips ensure your furry friend thrives in their new home!
          </Typography>
          
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={imageSrc}
            alt="Woman and her dog"
            sx={{
                width: "100%",
                borderRadius: "50% 40% 30% 60% / 40% 50% 60% 50%", // Custom shape
                objectFit: "cover", // Ensure the image covers the box
              }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutDetail2;

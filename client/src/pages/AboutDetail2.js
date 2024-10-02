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
            Helping dogs and cats live long and healthy
          </Typography>
          <Typography variant="body1" paragraph>
            Experience the transformative power of our Bowl Builder tool, where even minor adjustments yield significant results.
            Discover how incorporating fresh ingredients into your pet's meals enhances their well-being, regardless of their preferred diet—
            be it canned, kibble, raw, or a combination of these options.
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

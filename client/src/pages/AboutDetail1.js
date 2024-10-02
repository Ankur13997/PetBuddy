import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const AboutDetail1 = () => {
    return (
      <Box
        sx={{
          padding: "50px 0",
          textAlign: "left",
          minHeight: '80vh'
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
          maxWidth="lg"
          sx={{ margin: "0 auto" }}
        >
          {/* Left Section for Image */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about_1.jpg" // Replace with the actual image path
              alt="Pet and Owner"
              sx={{
                width: "100%",
                borderRadius: "50% 40% 30% 60% / 40% 50% 60% 50%", // Custom shape
                objectFit: "cover", // Ensure the image covers the box
              }}
            />
          </Grid>
  
          {/* Right Section for Text */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to The Pet Care Company
            </Typography>
            <Typography variant="body1" paragraph>
              Ingredients in Petpew holistic pet foods are meticulously chosen for
              their nutrient-rich profiles and health benefits, ensuring your pets
              thrive both physically and mentally. We prioritize ingredients that
              offer optimal nutrition and well-being, because we understand that
              when pets are healthy, they exude vitality and joy.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };
  
  export default AboutDetail1;
import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';

const ImageCollage = () => {
  return (
    <Grid container spacing={2} style={{ padding: 50,justifyContent: 'center', // Center the images horizontally
        alignItems: 'center' }}>
      {/* Left Large Image */}
      <Grid item xs={9} sm={5}>
        <Card>
          <CardMedia
            component="img"
            height="615"
            image="/images/dogcat.jpg"    // Make sure this path points to the large image
            alt="Large image"
          />
        </Card>
      </Grid>

      {/* Right Side with Two Stacked Smaller Images */}
      <Grid item xs={12} sm={4} container direction="column" spacing={2}>
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="/images/dog1.jpg"    // First small image
              alt="Small image 1"
            />
          </Card>
        </Grid>
        <Grid item>
          <Card>
            <CardMedia
              component="img"
              height="300"
              image="/images/cat1.jpg"  // Second small image
              alt="Small image 2"
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageCollage;

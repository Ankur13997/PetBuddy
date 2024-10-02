import React from 'react';
import { Box, Typography } from '@mui/material';

const PageHeader = ({ title, imageSrc }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fefbf5',
        padding: '0rem 7rem',
        position: 'relative',
        height: '500px', // Increased the height of the PageHeader
        overflow: 'hidden' // To prevent overflow issues
      }}
    >
      {/* Page Header Content */}
      <Box sx={{ width: '50%', zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '4rem',
            fontWeight: 'bold',
            color: '#333',
            marginBottom: '1rem',
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', color: '#555' }}>
          <span>&#x27A1;</span> Home /{' '}
          <span style={{ color: '#f57c00', fontWeight: 'bold' }}>
            {title}
          </span>
        </Typography>
      </Box>

      {/* Page Header Image */}
      <Box
        sx={{
          position: 'absolute', // Position absolute to shift image to extreme right
          right: 0,
          top: 0,
          height: '100%',
          width: '50%', // Image container takes 50% width
          zIndex: 0,
        }}
      >
        <img
          src={imageSrc}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image covers the container
          }}
        />
      </Box>
    </Box>
  );
};

export default PageHeader;

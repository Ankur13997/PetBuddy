import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Link } from 'react-router-dom';
// Replace with your YouTube video link
const videoUrl = "https://www.youtube.com/embed/NtyCzZtanjo?autoplay=1";

const HomePet = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <Box
      sx={{
        padding: "50px 0",
        textAlign: "left",
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
        {/* Left Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Unbreakable bonds pets, humanity's best friend
          </Typography>
          <Typography variant="body1" paragraph>
          Discover your perfect companion at PetBuddy. 
          Every pet deserves a loving home, and we're here to help you find the one that completes your family.
          </Typography>
          <Button
            variant="contained"
            color="warning"
            
            component={Link} 
           to="/pets"
            sx={{ marginTop: "20px" }}
          >
            Explore Now
          </Button>
        </Grid>

        {/* Right Video/Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              paddingTop: "56.25%", // 16:9 aspect ratio
              borderRadius: "12px",
              overflow: "hidden",
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={handlePlayVideo}
          >
            {!isVideoPlaying ? (
              <React.Fragment>
                <img
                  src="/images/homepet.png"
                  alt="Happy pet"
                  style={{
                    width: "100%", // Same width as iframe
                    height: "100%", // Same height as iframe
                    objectFit: "cover", // Ensures the image covers the entire area
                    borderRadius: "12px",
                    display: "block",
                    position: "absolute", // Make it fill the box just like iframe
                    top: 0,
                    left: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "#fff",
                    zIndex: 10,
                    textAlign: "center",
                  }}
                >
                  <PlayCircleOutlineIcon sx={{ fontSize: "80px" }} />
                </Box>
              </React.Fragment>
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 20,
                }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                ></iframe>
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePet;

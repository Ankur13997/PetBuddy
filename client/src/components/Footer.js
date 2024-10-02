import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ApiConfig from '../utils/ApiConfig';
const Footer = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubscribe = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Reset messages
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch(`${ApiConfig.backendUrl}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Send email in the request body
      });

      if (!response.ok) {
        // If response is not ok, throw an error
        const data = await response.json();
        if (data.message === 'Email already exists') {
          setErrorMessage('This email is already subscribed.'); // Set error message
        } else {
          setErrorMessage('An error occurred. Please try again.'); // Generic error message
        }
      } else {
        // If successful
        setSuccessMessage('Thank you for subscribing!'); // Set success message
        setEmail(''); // Reset the email input
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again.'); // Handle fetch error
    }
  };

  return (
    <>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#222",
          color: "#fff",
          py: 6,
          px: 2,
        }}
      >
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and Description */}
          <Grid item xs={12} md={3} textAlign="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                <img
                  src="/images/dog.png"
                  alt="PetBuddy Logo"
                  style={{ maxWidth: "50px" }}
                />
                <Typography variant="h5" component="span" fontWeight="bold">
                  PetBuddy
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#bbb", mt: 1 }}>
                PetBuddy focuses on providing loving homes to enhance every pet's vitality.
              </Typography>
            </Box>

            {/* Social Icons */}
            <Box mt={2} display="flex" justifyContent="center" gap={2}>
              <IconButton sx={{ color: "#fff" }} href="/">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }} href="/">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "#fff" }} href="/">
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* About Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h4" fontWeight="bold">
              About
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb", mt: 1 }}>
              (+91) 7588130302
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb", mt: 1 }}>
              ankur.130120@gmail.com
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" component="h4" fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Link
                href="/pets"
                underline="none"
                sx={{ display: "block", color: "#bbb", mb: 1 }}
              >
                Pet List
              </Link>
              <Link
                href="/blog"
                underline="none"
                sx={{ display: "block", color: "#bbb", mb: 1 }}
              >
                Blog
              </Link>
              <Link
                href="/petmatchmaker"
                underline="none"
                sx={{ display: "block", color: "#bbb", mb: 1 }}
              >
                Pet Matcher
              </Link>
              <Link
                href="/about"
                underline="none"
                sx={{ display: "block", color: "#bbb", mb: 1 }}
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                underline="none"
                sx={{ display: "block", color: "#bbb", mb: 1 }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Subscribe Section */}
          <Grid item xs={12} md={3}>
            {/* Display messages above the input field */}
            {errorMessage && (
              <Typography variant="body2" sx={{ color: 'red', mb: 1 }}>
                {errorMessage}
              </Typography>
            )}

            {successMessage && (
              <Typography variant="body2" sx={{ color: 'green', mb: 1 }}>
                {successMessage}
              </Typography>
            )}

            <Typography variant="body2" sx={{ color: "#bbb", mb: 2 }}>
              Join our list and get 15% off your first purchase!
            </Typography>
            <Box component="form" display="flex">
              <TextField
                variant="outlined"
                size="small"
                placeholder="your email"
                value={email} // Bind input value to state
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  mr: 1,
                  flex: 1,
                }}
              />
              <Button
                variant="contained"
                color="warning"
                sx={{ borderRadius: "5px" }}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;

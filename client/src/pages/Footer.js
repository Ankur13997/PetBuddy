import React from "react";
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
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const Footer = () => {
  return (
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
              Petpew’s holistic pet foods prioritize nutrient-rich ingredients
              for pet vitality.
            </Typography>
          </Box>

          {/* Social Icons */}
          <Box mt={2} display="flex" justifyContent="center" gap={2}>
            <IconButton sx={{ color: "#fff" }} href="/">
              <ShoppingBagIcon />
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
            (+99) 12345678
          </Typography>
          <Typography variant="body2" sx={{ color: "#bbb", mt: 1 }}>
            information@supp.net
          </Typography>
        </Grid>

        {/* Quick Links Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" component="h4" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link
              href="/"
              underline="none"
              sx={{ display: "block", color: "#bbb", mb: 1 }}
            >
              Cat product
            </Link>
            <Link
              href="/"
              underline="none"
              sx={{ display: "block", color: "#bbb", mb: 1 }}
            >
              Dog product
            </Link>
            <Link
              href="/"
              underline="none"
              sx={{ display: "block", color: "#bbb", mb: 1 }}
            >
              Rabbit product
            </Link>
            <Link
              href="/"
              underline="none"
              sx={{ display: "block", color: "#bbb" }}
            >
              Reptile product
            </Link>
          </Box>
        </Grid>

        {/* Subscribe Section */}
        <Grid item xs={12} md={3}>
          <Typography variant="body2" sx={{ color: "#bbb", mb: 2 }}>
            Join our list and get 15% off your first purchase!
          </Typography>
          <Box component="form" display="flex">
            <TextField
              variant="outlined"
              size="small"
              placeholder="your email"
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
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

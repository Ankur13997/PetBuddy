import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useUser } from "../utils/UserContext"; // Assuming you have a UserContext

const Header = () => {
  const { userId, username, isAdmin, setUserId, setUsername } = useUser();
  const isLoggedIn = Boolean(userId);
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false); // State for Drawer

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserId(null);
    setUsername(null);
    navigate("/login");
  };

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  // Drawer content for mobile menu
  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/pets">
          <ListItemText primary="Pets List" />
        </ListItem>
        <ListItem button component={Link} to="/blog">
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to="/about-us">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to="/contact-us">
          <ListItemText primary="Contact Us" />
        </ListItem>
        {isAdmin && (
          <ListItem button component={Link} to="/admin">
            <ListItemText primary="Admin" />
          </ListItem>
        )}
        {isLoggedIn ? (
          <>
            <ListItem button component={Link} to="/profile">
              <FaUserCircle style={{ marginRight: "8px" }} />
              <ListItemText primary={username || "Profile"} />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <FaSignOutAlt style={{ marginRight: "8px" }} />
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemText primary="Register" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          backgroundColor: "#f6f4e4",
          padding: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="body1"></Typography>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Typography variant="body2">(+91)7588130302</Typography>
          <Typography variant="body2">ankur.130120@gmail.com</Typography>
        </Box>
      </Box>

      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "#192a36", height: "80px" }}>
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center", height: "100%" }}>
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}
          >
            <img src="/images/dog.png" alt="PetPaw Logo" style={{ height: "50px", marginRight: "10px" }} />
            <Typography variant="h6" component="span">
              PetBuddy
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px", alignItems: "center" }}>
            <Button component={Link} to="/" color="inherit">Home</Button>
            <Button component={Link} to="/pets" color="inherit">Pets List</Button>
            <Button component={Link} to="/blog" color="inherit">Blog</Button>
            <Button component={Link} to="/petmatchmaker" color="inherit">Pet Matcher</Button>
            <Button component={Link} to="/about-us" color="inherit">About Us</Button>
            <Button component={Link} to="/contact-us" color="inherit">Contact Us</Button>
            {isAdmin && <Button component={Link} to="/admin" color="inherit">Admin</Button>}
          </Box>

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer (Dropdown) for smaller screens */}
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            {drawerContent}
          </Drawer>

          {/* User Links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px", alignItems: "center" }}>
            {isLoggedIn ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <IconButton component={Link} to="/profile" color="inherit">
                  <FaUserCircle size={24} />
                  <Typography variant="body1" sx={{ marginLeft: "8px", color: "white" }}>
                    {username || "Profile"}
                  </Typography>
                </IconButton>
                <IconButton onClick={handleLogout} color="inherit">
                  <FaSignOutAlt />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button component={Link} to="/login" color="inherit">Login</Button>
                <Button component={Link} to="/register" color="inherit">Register</Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

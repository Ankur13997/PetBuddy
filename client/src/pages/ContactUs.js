import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import Header from './Header';
import Footer from './Footer';
import PageHeader from './PageHeader'; 

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Simulate form submission success
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <>
      <Header />
      
      <PageHeader title="Contact" imageSrc="/images/blog.png" />

      <Box sx={{ padding: 4, maxWidth: 600, margin: "auto", bgcolor: "#f9f9f9", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: 'center' }}>
        <Paper elevation={3} sx={{ padding: 4, borderRadius: "8px" }}>
          <Typography variant="h4" component="h1" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3, color: '#555' }}>
            Thank you for your interest in our products. Please fill out the form, and we will contact you shortly.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  Contact Details
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                  📞 7588130302
                </Typography>
                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
                  📧 ankur.130120@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <TextField
              fullWidth
              variant="outlined"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              variant="outlined"
              name="message"
              label="Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              sx={{ marginBottom: 2 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FFC107',
                color: '#192a36',
                '&:hover': {
                  backgroundColor: '#FFEB3B',
                },
                width: '100%',
                fontWeight: 'bold',
              }}
              type="submit"
            >
              Submit
            </Button>
          </form>

          {/* Location Section - Moved below the submit button */}
          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
              Find us at this location
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              Plot no 24. Sanket Nagar near Suyog nagar, Nagpur, Maharashtra 440015
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.690535190513!2d79.0829567!3d21.1064993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf68da7c256b%3A0x8f7e77e46d4b8360!2sTukaram%20Sabhagruh%2C%20Dulhan%20Electronics%20and%20Gifts%2C%20Prakash%20Traders!5e0!3m2!1sen!2sid!4v1632519160587!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Paper>

        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
        >
          <Alert onClose={() => setSuccess(false)} severity="success">
            Your message has been sent successfully!
          </Alert>
        </Snackbar>
        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={() => setError(false)}
        >
          <Alert onClose={() => setError(false)} severity="error">
            There was an error sending your message.
          </Alert>
        </Snackbar>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUs;

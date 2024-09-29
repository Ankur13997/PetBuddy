import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext';
import {
  Box,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
  Paper,
} from '@mui/material';

const AdoptionForm = ({ petId }) => {
  const { userId } = useUser();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/adoptions`, { ...formData, petId, userId });
      setSuccess(true);
      setError(false);
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (err) {
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
      <Typography variant="h5" component="h2" sx={{ marginBottom: 2 }}>
        Adoption Application
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          name="name"
          label="Your Name"
          fullWidth
          required
          value={formData.name}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          variant="outlined"
          name="email"
          label="Your Email"
          type="email"
          fullWidth
          required
          value={formData.email}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          variant="outlined"
          name="message"
          label="Why do you want to adopt this pet?"
          multiline
          rows={4}
          fullWidth
          required
          value={formData.message}
          onChange={handleChange}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FFC107', // Yellow color
            color: '#192a36', // Dark text color for contrast
            '&:hover': {
              backgroundColor: '#FFEB3B', // Lighter yellow on hover
            },
            width: '100%',
          }}
          type="submit"
          disabled={!userId}
        >
          Apply for Adoption
        </Button>
      </form>

      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success">
          Application submitted successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error">
          Failed to submit application.
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default AdoptionForm;

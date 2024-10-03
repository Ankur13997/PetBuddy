// AdminAddTestimonial.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from '@mui/material';
import ApiConfig from '../utils/ApiConfig';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AdminAddTestimonial = () => {
  const [formData, setFormData] = useState({
    text: '',
    name: '',
    role: '',
  });
  const [testimonials, setTestimonials] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Fetch testimonials when the component mounts
  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`${ApiConfig.backendUrl}/api/testimonials`);
      setTestimonials(response.data);
    } catch (err) {
      console.error('Error fetching testimonials:', err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchTestimonials(); // Call fetchTestimonials when component mounts
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Edit existing testimonial
        await axios.put(`${ApiConfig.backendUrl}/api/testimonials/${editingId}`, formData);
        setSuccess('Testimonial updated successfully!');
      } else {
        // Add new testimonial
        await axios.post(`${ApiConfig.backendUrl}/api/testimonials`, formData);
        setSuccess('Testimonial added successfully!');
      }

      // Reset form and fetch testimonials
      setFormData({ text: '', name: '', role: '' });
      setEditingId(null);
      fetchTestimonials(); // Call fetchTestimonials after adding or editing
    } catch (error) {
      console.error('Error adding/updating testimonial:', error);
      setError(true);
    }
  };

  const handleEdit = (testimonial) => {
    setFormData({
      text: testimonial.text,
      name: testimonial.name,
      role: testimonial.role,
    });
    setEditingId(testimonial._id); // Assuming _id is the unique identifier
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${ApiConfig.backendUrl}/api/testimonials/${id}`);
      setSuccess('Testimonial deleted successfully!');
      fetchTestimonials(); // Call fetchTestimonials after deletion
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      setError(true);
    }
  };

  return (
    <div>
      <Typography variant="h6">Add Testimonial</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="text"
          label="Testimonial Text"
          value={formData.text}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <TextField
          name="role"
          label="Role"
          value={formData.role}
          onChange={handleChange}
          required
          fullWidth
          style={{ marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          {editingId ? 'Update Testimonial' : 'Add Testimonial'}
        </Button>
      </form>

      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success">
          {success}
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error">
          Failed to perform action.
        </Alert>
      </Snackbar>

      <Box mt={3}>
        <Typography variant="h6">Testimonials List</Typography>
        <List>
          {testimonials.map((testimonial) => (
            <ListItem key={testimonial._id}>
              <ListItemText
                primary={testimonial.text}
                secondary={`${testimonial.name} - ${testimonial.role}`}
              />
              <IconButton  color="success" onClick={() => handleEdit(testimonial)}>
                <EditIcon />
              </IconButton>
              <IconButton  color="error" onClick={() => handleDelete(testimonial._id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
};

export default AdminAddTestimonial;

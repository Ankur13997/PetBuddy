import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  subscribeContainer: {
    backgroundColor: '#183437', // Dark teal background color
    color: 'white',
    padding: '50px 20px',
    textAlign: 'center',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  inputField: {
    borderRadius: '5px',
    backgroundColor: 'white',
    width: '300px',
    '& input': {
      padding: '10px',
    },
  },
  subscribeButton: {
    backgroundColor: '#F7931E', // Orange button color
    marginLeft: '10px',
    padding: '10px 20px',
    borderRadius: '25px',
    '&:hover': {
      backgroundColor: '#e68713',
    },
  },
}));

const SubscribeSection = () => {
  const classes = useStyles();
  const [email, setEmail] = useState(''); // State for email input
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubscribe = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Reset messages
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/subscribe', {
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
    <Box className={classes.subscribeContainer}>
      <Typography variant="h4" component="h2" gutterBottom>
        Subscribe and Save!
      </Typography>
      <Typography variant="body1" sx={{ color: 'white' }}>
        Subscribe to the Petpew mailing list to receive updates on new arrivals,
        special offers, and other discount information.
      </Typography>

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

      <Box className={classes.inputContainer}>
        <TextField
          variant="outlined"
          placeholder="name@email.com"
          className={classes.inputField}
          value={email} // Bind input value to state
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          InputProps={{ style: { borderRadius: '0px' } }}
        />
        <Button
          variant="contained"
          color="warning"
          sx={{ borderRadius: "5px", ml: 2 }} // Add left margin
          onClick={handleSubscribe} // Attach the click handler
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeSection;

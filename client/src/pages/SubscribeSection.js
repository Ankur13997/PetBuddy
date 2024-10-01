import React from 'react';
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
    borderRadius: '25px',
    backgroundColor: 'white',
    width: '300px',
    '& input': {
      padding: '10px',
    },
  },
  subscribeButton: {
    backgroundColor: '#F7931E', // Orange button color
    color: 'white',
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

  return (
    <Box className={classes.subscribeContainer}>
      <Typography variant="h4" component="h2" gutterBottom>
        Subscribe and Save!
      </Typography>
      <Typography variant="body1" sx={{ color: 'white' }}>
        Subscribe to the Petpew mailing list to receive updates on new arrivals,
        special offers, and other discount information.
      </Typography>
      
      <Box className={classes.inputContainer}>
        <TextField
          variant="outlined"
          placeholder="name@email.com"
          className={classes.inputField}
          InputProps={{ style: { borderRadius: '25px' } }}
        />
        <Button className={classes.subscribeButton}>
          Subscribe
        </Button>
      </Box>
    </Box>
  );
};

export default SubscribeSection;

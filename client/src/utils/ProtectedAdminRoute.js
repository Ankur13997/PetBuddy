import { useUser } from './UserContext';
import { Navigate } from 'react-router-dom';
import { CircularProgress, Box } from '@mui/material';
const ProtectedAdminRoute = ({ children }) => {
  const { isAdmin, loading } = useUser(); // Include loading state
 

  if (loading) {
    // Render a centered loading spinner while the context is loading
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh', // Full height to center the spinner
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedAdminRoute;

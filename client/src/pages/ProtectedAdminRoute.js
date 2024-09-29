import { useUser } from './UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedAdminRoute = ({ children }) => {
  const { isAdmin } = useUser(); // Get admin status from context

  // Check if the user is an admin
  if (!isAdmin) {
    // If the user is not an admin, redirect them to the home page or login
    return <Navigate to="/" />;
  }

  // If the user is an admin, render the children components
  return children;
};

export default ProtectedAdminRoute;

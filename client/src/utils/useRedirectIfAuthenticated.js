import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirectIfAuthenticated = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      navigate('/'); // Redirect to profile or home page if token exists
    }
  }, [navigate]);
};

export default useRedirectIfAuthenticated;

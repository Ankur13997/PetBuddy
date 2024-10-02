import React, { createContext, useContext, useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUserId(decoded.id);
        setUsername(decoded.name);
        setIsAdmin(decoded.isAdmin);
      } catch (error) {
        console.error("Token decoding failed:", error);
        localStorage.removeItem('token');
      }
    }
    setLoading(false); // Set loading to false after decoding
  }, []);

  return (
    <UserContext.Provider value={{ userId, username, isAdmin, loading,setUserId,setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

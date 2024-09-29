import React, { createContext, useContext, useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Removed curly braces from jwtDecode

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // Add state for username

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode(token);
 
      setUserId(decoded.id); // Extract userId from token
      setUsername(decoded.name); // Extract username from token
      setIsAdmin(decoded.isAdmin);
     
    }
  }, []);

  return (
    <UserContext.Provider value={{ userId, username,isAdmin, setUserId,setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};

import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('name');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem('name', userData.name);
    localStorage.setItem('mail', userData.email);
    setUser(userData.name);
    navigate('/home');
  };

  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('mail');
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

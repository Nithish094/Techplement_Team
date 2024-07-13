// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="container mt-3">
      {!user ? (
        <nav className="nav justify-content-center mb-5">
          <Link className="nav-link" to="/login">Login</Link>
          <Link className="nav-link" to="/signup">Signup</Link>
        </nav>
      ) : (
        <nav className="nav justify-content-center mb-5">
          <Link className="nav-link" to="/home">Home</Link>
          <Link className="nav-link" to="/logs">Logs</Link>
          <button className="btn btn-primary" onClick={logout}>Logout</button>
        </nav>
      )}
    </div>
  );
}

export default Header;

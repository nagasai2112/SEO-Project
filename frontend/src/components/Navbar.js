import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">SEOrdinal</div>
        <div className="navbar-links">
          <NavLink exact="true" to="/" activeclassname="active">Home</NavLink>
          <NavLink to="/upload" activeclassname="active">Upload</NavLink>
          <NavLink to="/results" activeclassname="active">Results</NavLink>
          <NavLink to="/milestones" activeclassname="active">Milestones</NavLink>
          <NavLink to="/contact" activeclassname="active">Contact</NavLink>
          <NavLink to="/about" activeclassname="active">About</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

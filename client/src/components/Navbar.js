import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
  
const Navbar =() => {
  return (
    <div className="nav-header">
      <NavLink to="/" exact className="link">Schedule View</NavLink>
      <NavLink to="/calendar" className="link">Calendar View</NavLink>
      <NavLink to="/add-event" className="link">Add event</NavLink>
    </div>
  )
}

export default Navbar
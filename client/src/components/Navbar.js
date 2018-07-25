import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import UserStatusContainer from '../containers/UserStatusContainer'
  
const Navbar =() => {
  return (

    <nav className="nav-header">
      <div className="nav-links">
        <NavLink to="/" exact className="link">Home</NavLink>
        <NavLink to="/schedule" className="link">Schedule View</NavLink>
        <NavLink to="/calendar" className="link">Calendar View</NavLink>
        <NavLink to="/add-event" className="link">Add event</NavLink>
      </div>
      <div className="nav-user-status">
        <UserStatusContainer />
      </div>
    </nav>

  )
}

export default Navbar
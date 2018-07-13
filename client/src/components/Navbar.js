import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import UserStatusContainer from '../containers/UserStatusContainer'
  
const Navbar =() => {
  return (

    <div className="nav-header">
      <div className="nav-links">
        <NavLink to="/schedule" exact className="link">Schedule View</NavLink>
        <NavLink to="/calendar" className="link">Calendar View</NavLink>
        <NavLink to="/add-event" className="link">Add event</NavLink>
      </div>
      <div className="nav-user-status">
        <UserStatusContainer />
      </div>
    </div>

  )
}

export default Navbar
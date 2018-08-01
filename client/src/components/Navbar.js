import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthContainer from '../containers/AuthContainer'
  
const Navbar =() => {
  return (

    <nav className="nav-header">
      <div className="nav-links">
        <NavLink to="/" exact className="link">Home</NavLink>
        <NavLink to="/events" className="link">Schedule View</NavLink>
        { 
         // <NavLink to="/calendar" className="link">Calendar View</NavLink>
        }  
        <NavLink to="/events/new" className="link">Add event</NavLink>
      </div>
      <div className="nav-user-status">
        {
         // <AuthContainer />
        }  
      </div>
    </nav>

  )
}

export default Navbar
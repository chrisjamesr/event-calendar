import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthContainer from '../containers/AuthContainer'
  
const Navbar =({match, history, location}) => {

  const renderAuthContainer = (location) =>{
    
    return location.pathname !== "/" ? <AuthContainer history={history}/> : null
  }

  return (

    <nav className="nav-header">
      <div className="nav-links">
        
        <NavLink to="/events" className="link">Upcoming Events</NavLink>
        { 
         // <NavLink to="/calendar" className="link">Calendar View</NavLink>
        }
        <NavLink to="/" exact className="link">Home</NavLink>  
        <NavLink to="/events/new" className="link">Add event</NavLink>
      </div>
      <div className="nav-user-status">
        {
         renderAuthContainer(location)
        }  
      </div>
    </nav>

  )
}

export default Navbar
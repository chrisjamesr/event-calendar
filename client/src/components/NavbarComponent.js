import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthContainer from '../containers/AuthContainer'
  
const Navbar =({history,loggedIn}) => {

  return (
    <nav className="nav-header">
      <div className="icon"></div>
      <div className="navbar-link-container">
        <div >
          <NavLink to="/events"
            className="nav-link" 
            activeClassName="nav-link-active" 
          >
            All Events
          </NavLink>
        </div>  
        <div>
          { 
            loggedIn ?               
              <NavLink to="/events/new"
                className="nav-link" 
                activeClassName="nav-link-active"
              > Add Event </NavLink> : null
          } 
        </div> 
        <div>
          { 
            loggedIn ? 
              <NavLink 
                to={`/users/${sessionStorage.user_id}/events`}
                className="nav-link" 
                activeClassName="nav-link-active"
              > My Events </NavLink>: null
           }  
         </div> 
      </div>
      <AuthContainer history={history} />
    </nav>
  )
}

export default Navbar
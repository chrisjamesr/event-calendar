import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import Icon from "./Icon"
import AuthContainer from '../containers/AuthContainer'
import AuthModalContainer from '../containers/AuthModalContainer'

  
const Navbar =({history,loggedIn}) => {

  return (
    <nav>
      <div className="nav-header">
        <Icon/>
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
        <AuthModalContainer /> 
        <AuthContainer history={history}/>        
      </div>  
    </nav>
  )
}

export default Navbar
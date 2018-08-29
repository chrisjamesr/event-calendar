import React from 'react';
import {NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import AuthContainer from '../containers/AuthContainer'
  
const Navbar =({match, history, location}) => {

  return (

    <nav className="nav-header">
      <div className="nav-user-status">
        <AuthContainer history={history} />
      </div>
    </nav>
  )
}

export default Navbar
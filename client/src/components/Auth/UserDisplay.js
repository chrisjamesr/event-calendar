import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'

const UserDisplay = ({userName, logOut}) => {
  return (
    <div className="user-display">
      <p>Logged in as
        <br/>  
        <NavLink to="/" exact className="link">{userName} </NavLink>  
        <br/>
        <NavLink to="/" exact className="link"> All Events</NavLink>  
        <NavLink to="/events/new" className="link">Add event</NavLink>
      </p>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

UserDisplay.propTypes = {
  userName: PropTypes.string,
  logOut: PropTypes.func
}

export default UserDisplay
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'

const UserDisplay = ({userName, logOut}) => {
  return (
    <div className="user-display">
      <p>Logged in as {userName} </p>
      <NavLink to="/" exact className="link">My Events</NavLink>  
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default UserDisplay
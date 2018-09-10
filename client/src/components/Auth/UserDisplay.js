import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../styles/Navbar.css'

const UserDisplay = ({userName, logOut}) => {
  return (
    <div className="user-display">
      <div>
        Logged in as <NavLink to={`/users/${sessionStorage.user_id}/events`}>{userName}</NavLink>
      </div>
      <hr/>  
      <NavLink to="#" onClick={logOut}>Log Out</NavLink>
    </div>
  )
}

UserDisplay.propTypes = {
  userName: PropTypes.string,
  logOut: PropTypes.func
}

export default UserDisplay
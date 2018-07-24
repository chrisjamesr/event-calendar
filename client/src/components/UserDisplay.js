import React from 'react'
import '../styles/Navbar.css'

const UserDisplay = ({userName, logOut}) => {
  debugger
  return (
    <div className="user-display">
      <p>Logged in as {userName} </p>
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default UserDisplay
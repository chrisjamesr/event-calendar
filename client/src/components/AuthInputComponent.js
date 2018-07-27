import React from 'react'
import PropTypes from 'prop-types'
import '../styles/form.css';

const AuthInputComponent = ({handleChange, handleSubmit, email, password}) =>{
  return(
      <form 
        name="auth-input-form"
        className="auth-input-container"
        onSubmit={handleSubmit}
      >
        <div>
          <input 
            onChange={handleChange}
            value = { email }
            placeholder="email" 
            type="email" 
            name="email"
           /><br />
          <input 
            onChange={handleChange}
            value = { password }
            placeholder="password" 
            type="password" 
            name="password"
          />
        </div>
        <input type="submit" className="toggle-link button" placeholder="Submit" />
      </form>
  )
}

AuthInputComponent.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  password: PropTypes.string,
  email: PropTypes.string
}

export default AuthInputComponent
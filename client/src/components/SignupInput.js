import React from 'react'
import PropTypes from 'prop-types'
import '../styles/form.css';

const SignupInput = ({handleChange, handleSubmit, email, password}) =>{
  return(
    // <div className="auth-input-container">
      <form 
        className="auth-input-container"
        onSubmit={ handleSubmit }
      >
        <div>
          <input 
            onChange={ handleChange }
            value = { email }
            placeholder="email" 
            type="email" 
            name="email"
           /><br />
          <input 
            onChange={ handleChange }
            value = { password }
            placeholder="password" 
            type="password" 
            name="password"
          />
          <input type="submit" className="toggle-link button" placeholder="Submit" />
        </div>
      </form>
    //</div>
  )
}

SignupInput.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  password: PropTypes.string,
  email: PropTypes.string
}

export default SignupInput
import React from 'react'
import PropTypes from 'prop-types'

const SignupInput = ({handleChange, handleSubmit, email, password, name}) =>{
  return(
    <div className="input">
      <form 
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div>
          <input 
            onChange={handleChange}
            value = { name }
            placeholder="name" 
            type="text" 
            name="name"
          />
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
          <button>Sign Up</button>
        </div>
        
      </form>
    </div>
  )
}

SignupInput.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  password: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string
}

export default SignupInput
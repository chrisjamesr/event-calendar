import React from 'react'
import PropTypes from 'prop-types'

const LoginInput = ({handleChange, handleSubmit, email, password}) =>{
  return(
    <div className="input">
      <form 
        className="login-form"
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
        <button>Sign In</button>
      </form>
    </div>
  )
}

// ADD PROPTYPES
LoginInput.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  password: PropTypes.string,
  email: PropTypes.string
}

export default LoginInput
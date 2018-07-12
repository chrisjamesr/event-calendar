import React from 'react'

const LoginInput = ({handleChange, handleSubmit}, props) =>{
  return(
    <div className="input">
      <form 
        className="login-form"
        onSubmit={handleSubmit}
      >
        <div>
          <input 
            onChange={handleChange}
            value = { props.email }
            placeholder="email" 
            type="email" 
            name="email"
           /><br />
          <input 
            onChange={handleChange}
            value = { props.password }
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

export default LoginInput
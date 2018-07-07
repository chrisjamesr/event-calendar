import React from 'react'

const LoginInput = (props) =>{
  return(
    <div className="input">
      <form className="login-form">
        <div>
          <input placeholder="email" type="email" name="email"/><br />
          <input placeholder="password" type="password" name="password"/>
        </div>
        <button>Sign In</button>
      </form>
    </div>
  )
}

export default LoginInput
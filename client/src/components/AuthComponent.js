import React from 'react'
import LoginInput from '../components/LoginInput'
import SignupInput from '../components/SignupInput'

const AuthComponent = ({selector, handleChange, handleSubmit, email, password, name}) => {
  if (selector === "signUp"){
    return <SignupInput handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        email={email}
                        password={password}  
                        name={name}
           />
  } else if (selector === "logIn"){ 
    return <LoginInput handleChange={handleChange}
                       handleSubmit={handleSubmit}
                       email={email}
                       password={password}  
                       name={name}
            />
  }
}

export default AuthComponent
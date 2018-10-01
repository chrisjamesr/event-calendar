import UserAPI from '../api/userAPI'


export function logIn(history, user){
  return function(dispatch){
    dispatch({
      type: 'LOGIN_REQUEST',
      message: "Logging In..."
    })
    return UserAPI.getToken(user)
      .then(({ status, json }) => {
        if (status < 400) {
          sessionStorage.setItem('jwt', json.jwt)
          sessionStorage.setItem('user_id', parseInt(json.user_id,10))
          sessionStorage.setItem('username', user.email.split('@')[0])  
          dispatch({
            type: 'LOGIN_SUCCESS',
            message: `Welcome ${user.email.split('@')[0]}`
          })
          history.push("/events") 
        } else {
          throw new Error(json.errors)
        }  
      }    
    )
    .catch((e)=>{
      console.log("login failed")
      // console.log(e.message)
      dispatch({
        type: 'LOGIN_FAILURE',
        message: `${e.message}`
      })
    })
  }    
}

export function signUp(history, user){
  return function(dispatch){
    dispatch({
      type: 'SIGNUP_REQUEST',
      message: "Signing Up..."
    })
    return UserAPI.createToken(user) 
      .then(({ status, json }) => {
        if (status < 400) {
          sessionStorage.setItem('jwt', json.jwt)
          sessionStorage.setItem('user_id', parseInt(json.user_id,10))
          sessionStorage.setItem('username', user.email.split('@')[0])  
          dispatch({
            type: 'SIGNUP_SUCCESS',
            message: `Welcome ${user.email.split('@')[0]}`
          })
          history.push("/events") 
        } else {
          throw new Error(json.errors)
        }  
      }
    )
    .catch((e)=>{
      console.log("Signup failed")
      dispatch({
        type: 'SIGNUP_FAILURE',
        message: `${e.message}`
      })
    })
  }
} 

export function logOut(history){
  return function(dispatch){
    sessionStorage.clear()
    dispatch({
      type: 'LOGOUT_USER',
      message: "Logged Out"
    })
    history.push("/") 
  }
}




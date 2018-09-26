import UserAPI from '../api/userAPI'


export function logIn(history, user){
  return function(dispatch){
    dispatch({type: 'LOGIN_REQUEST'})
    return UserAPI.getToken(user)
      .then(
        ({ status, json }) => {
          if (status >= 400) {
            console.log("login failed")
            console.log(status, json)
          } else {
            console.log(status, json)
            sessionStorage.setItem('jwt', json.jwt)
            sessionStorage.setItem('user_id', parseInt(json.user_id,10))
            sessionStorage.setItem('username', user.email.split('@')[0])  
            dispatch({
              type: 'LOGIN_SUCCESS'
            })
            history.push("/events") 
          }  
      }    
    )
  }
}    

export function signUp(history, user){
  return function(dispatch){
    dispatch({type: 'SIGNUP_REQUEST'})
    return UserAPI.createToken(user) 
      .catch(error=> {
        dispatch({
          type: 'SIGNUP_FAILURE',
          message: error.statusText
        })
        console.error(error.statusText)
        return Promise.reject()
      })
      .then(json => {
        sessionStorage.setItem('jwt', json.jwt)
        sessionStorage.setItem('user_id', json.user_id)
        sessionStorage.setItem('username', user.email.split('@')[0])
        dispatch({
          type: 'SIGNUP_SUCCESS'
        })
        history.push("/events") 
      })  
  }
}

export function logOut(history){
  return function(dispatch){
    sessionStorage.clear()
    dispatch({
      type: 'LOGOUT_USER'
    })
    history.push("/") 
  }
}




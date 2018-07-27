import fetch from 'isomorphic-fetch'
import UserAPI from '../api/userAPI'


export function logIn(user){
  return function(dispatch){
    dispatch({type: 'LOGIN_REQUEST'})
    return UserAPI.getToken(user) 
      .catch(error=> {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: error.statusText
        })
        console.error(error)
        return Promise.reject()
      })
      .then(json => {
        sessionStorage.setItem('jwt', json.jwt)
        sessionStorage.setItem('user', user.email.split('@')[0])
        dispatch({
          type: 'LOGIN_SUCCESS'
        })
      })  
  }
}    

export function signUp(user){
  return function(dispatch){
    dispatch({type: 'SIGNUP_REQUEST'})
    return UserAPI.createToken(user) 
      .catch(error=> {
        dispatch({
          type: 'SIGNUP_FAILURE',
          payload: error.statusText
        })
        console.error(error)
        return Promise.reject()
      })
      .then(json => {
        sessionStorage.setItem('jwt', json.jwt)
        sessionStorage.setItem('user', user.email.split('@')[0])
        dispatch({
          type: 'SIGNUP_SUCCESS'
        })
      })  
  }
}

export function logOut(){
  return function(dispatch){
    sessionStorage.clear()
    dispatch({
      type: 'LOGOUT_USER'
    })
  }
}




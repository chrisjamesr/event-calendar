import fetch from 'isomorphic-fetch'
import UserAPI from '../api/userAPI'


export function logIn(auth){
  return function(dispatch){
    dispatch({type: 'LOGIN_REQUEST'})
    return UserAPI.getToken(auth) 
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
        dispatch({
          type: 'LOGIN_SUCCESS'
        })
      })  
  }
}    

export function signUp(auth){
  return function(dispatch){
    dispatch({type: 'SIGNUP_REQUEST'})
    return UserAPI.createToken(auth) 
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
        dispatch({
          type: 'SIGNUP_SUCCESS'
        })
      })  
  }
}




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
    dispatch({type: 'LOGIN_REQUEST'})
    return fetch('http://localhost:3000/api/user_token',{
      body: JSON.stringify(auth),
      headers: { 'content-type': 'application/json' },
      method: 'POST'
      })
      .then(json => {
        sessionStorage.setItem('jwt', json.jwt)
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: json.jwt
        })
      })  
      .catch(error=> {
        // dispatch({
        //   type: 'LOGIN_FAILURE',
        //   payload: error.statusText
        // })
        console.error(`this didn't work, ${error}`)
      }) 
  }
}




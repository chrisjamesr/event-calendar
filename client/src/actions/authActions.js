import fetch from 'isomorphic-fetch'

export function signin(auth){
  return function(dispatch){
    dispatch({type: 'LOGIN_REQUEST'})
    return fetch('http://localhost:3000/api/user_token',{
      body: JSON.stringify(auth),
      headers: { 'content-type': 'application/json' },
      method: 'POST'
      })
      .then(handleError)
      .then(res=> res.json())
      .then(json => {
        sessionStorage.setItem('jwt', json.jwt)
        dispatch({
          type: 'LOGIN_SUCCESS'
        })
      })  
      .catch(error=> {
        dispatch({
          type: 'LOGIN_FAILURE'
        })
      }) 
  }
}    

export function signup(auth){
  return function(dispatch){
    dispatch({type: 'LOGIN_REQUEST'})
    return fetch('http://localhost:3000/api/user_token',{
      body: JSON.stringify(auth),
      headers: { 'content-type': 'application/json' },
      method: 'POST'
      })
      .then(handleError)
      .then(res=> res.json())
      .then(json => {
        sessionStorage.setItem('jwt', json.jwt)
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: json.jwt
        })
      })  
      .catch(error=> {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: error.statusText
        })
      }) 
  }
}

function handleError(response){
  if (!response.ok) {
    throw Error(response.statusText);
  }
    return response
}

function storeToken(){}

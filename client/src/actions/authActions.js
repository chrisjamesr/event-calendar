import fetch from 'isomorphic-fetch'

export function login(auth){
  return function(dispatch){
    dispatch({type: 'LOGIN_REQUEST'})
    return fetch('http://localhost:3000/api/user_token',{
      body: JSON.stringify(auth),
      headers: { 'content-type': 'application/json' },
      method: 'POST'
      })
      .then(handleError)
      .then(res=> res.json())
      .then(jwt => {
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: jwt
        })
      })  
      .catch(error=> {

        dispatch({
          type: 'LOGIN_FAILURE',
          payload: "response.statusText"
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
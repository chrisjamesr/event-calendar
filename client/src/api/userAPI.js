import {handleError} from './apiUtils'
// import {tokenHeader} from './apiUtils'
class UserAPI {

  static getToken(user){
    const tokenRequest = new Request('http://localhost:3000/api/user_token',{
      body: JSON.stringify({'auth': user}),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
      })
    return fetch(tokenRequest).then(handleError)
      .then(response=> {
        return response.json() 
    })
  }

  static createToken(user){
    const tokenRequest = new Request('http://localhost:3000/api/users',{
      body: JSON.stringify({'user': user}),
      headers: { 'content-type': 'application/json' },
      method: 'POST'
      })
    return fetch(tokenRequest).then(handleError)
      .then(response=> {
        return response.json() 
    })
  }
}

export default UserAPI

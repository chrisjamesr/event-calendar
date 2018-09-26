import {parseResponse} from './apiUtils'
// import {tokenHeader} from './apiUtils'
class UserAPI {

  static getToken(user){
    const tokenRequest = new Request('/api/user_token',{
      body: JSON.stringify({'auth': user}),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
      })
    return fetch(tokenRequest)
      .then(parseResponse)
  }

  static createToken(user){
    const tokenRequest = new Request('/api/users',{
      body: JSON.stringify({'user': user}),
      headers: { 'content-type': 'application/json' },
      method: 'POST'
      })
    return fetch(tokenRequest)
      .then(parseResponse)
  } 
} //end of class

export default UserAPI

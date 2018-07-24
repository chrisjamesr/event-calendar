class UserAPI {

  // static tokenHeader(){
  //   !!sessionStorage.jwt ? {'Authorization': `Bearer ${sessionStorage.jwt}`} : null
  //   }
  // }
  static getToken(auth){
    const tokenRequest = new Request('http://localhost:3000/api/user_token',{
      body: JSON.stringify({'auth': UserAPI.removeNameProperty(auth)}),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
      })
    return fetch(tokenRequest).then(handleError)
      .then(response=> {
        return response.json() 
    })
  }

  static removeNameProperty({auth}){
    return {email: auth.email, password: auth.password}
  }
}

export default UserAPI

function handleError(response){
  debugger
  if (!response.ok) {
    throw Error(response.statusText);
  }
    return response
}

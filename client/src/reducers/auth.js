export default function authReducer(state={jwt: ''}, action){
  switch (action.type){
    case 'LOGIN_REQUEST':
      return state
    case 'LOGIN_SUCCESS':
    debugger
      let token = {jwt: action.payload}      
      return token
    case 'LOGIN_FAILURE':
      return Object.assign({},state, {msg: action.payload})
    default:
      return state
  }
}
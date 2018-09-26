import initialState from './initialState'

export default function authReducer(state = initialState.auth, action){
  const loginState = {message: action.message, loggedIn: !!sessionStorage.jwt}
  switch (action.type){
    case 'LOGIN_REQUEST':
      return loginState
    case 'LOGIN_SUCCESS':
      return loginState
    case 'LOGIN_FAILURE':
      return loginState
    case 'SIGNUP_REQUEST':
      return loginState
    case 'SIGNUP_SUCCESS':  
      return loginState
    case 'SIGNUP_FAILURE':
      return loginState
    case 'LOGOUT_USER':
      return loginState
    default:
      return state
  }
}
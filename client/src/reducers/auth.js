import initialState from './initialState'

export default function authReducer(state = initialState.auth, action){
  switch (action.type){
    case 'LOGIN_REQUEST':
      return state
    case 'LOGIN_SUCCESS':
      return !!sessionStorage.jwt
    case 'LOGIN_FAILURE':
      return !!sessionStorage.jwt
    case 'SIGNUP_REQUEST':
      return state
    case 'SIGNUP_SUCCESS':  
      return !!sessionStorage.jwt
    case 'SIGNUP_FAILURE':
      return !!sessionStorage.jwt
    case 'LOGOUT_USER':
      return !!sessionStorage.jwt
    default:
      return state
  }
}
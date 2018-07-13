import initialState from './initialState'

export default function authReducer(state = initialState.loggedIn, action){
  switch (action.type){
    case 'LOGIN_REQUEST':
      return state
    case 'LOGIN_SUCCESS':
      return {loggedIn: !!sessionStorage.jwt}
    case 'LOGIN_FAILURE':
      return {loggedIn: !!sessionStorage.jwt}
    case 'SIGNUP_REQUEST':
      return state
    case 'SIGNUP_SUCCESS':  
      return state
    case 'SIGNUP_FAILURE':
      return state
    default:
      return state
  }
}
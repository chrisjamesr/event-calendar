export default function authReducer(state={jwt: ''}){
  switch (action.type){
    case 'LOGIN':
      const jwt = action.payload['jwt']
      return jwt
    default:
      return state
  }
}
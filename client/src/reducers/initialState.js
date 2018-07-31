const initialState = {
  // jwt: '',
  events: [],
  currentEvent: {},
  loggedIn: !!sessionStorage.jwt
}

export default initialState
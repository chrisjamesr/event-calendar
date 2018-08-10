const initialState = {
  // jwt: '',
  events: [],
  currentEvent: {},
  auth: !!sessionStorage.jwt
}

export default initialState
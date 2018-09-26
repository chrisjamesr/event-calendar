const initialState = {
  // jwt: '',
  events: [],
  currentEvent: {},
  auth: {
    loggedIn: !!sessionStorage.jwt,
    message: ""
  }
  // rsvp: []
}

export default initialState
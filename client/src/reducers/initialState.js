const initialState = {
  // jwt: '',
  events: {
    events: [],
    loading: false
  },
  currentEvent: {
    currentEvent:{},
    loading: false
  },    
  auth: {
    loggedIn: !!sessionStorage.jwt,
    message: ""
  }
  // rsvp: []
}

export default initialState
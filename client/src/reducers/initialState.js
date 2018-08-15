const initialState = {
  // jwt: '',
  events: [],
  currentEvent: {},
  auth: !!sessionStorage.jwt,
  rsvps: []
}

export default initialState
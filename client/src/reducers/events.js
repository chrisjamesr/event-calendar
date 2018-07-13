import initialState from './initialState'

export default function eventsReducer(state=initialState.events, action){
  switch (action.type) {
    case 'FETCH_EVENTS':
      let events = action.payload
      return events
    case 'CREATE_EVENT':
      let event = action.payload
      debugger
      return state.concat(event)
    default:
      return state
  }
}
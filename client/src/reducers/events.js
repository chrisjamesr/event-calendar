export default function eventsReducer(state = [], action){
  let events;
  switch (action.type) {
    case 'FETCH_EVENTS':
      events = action.payload
      return events
    case 'CREATE_EVENT':
      let event = action.payload
      events = state.concat(action.payload)
      return state
    default:
      return state
  }
}
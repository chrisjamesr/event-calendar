export default function eventsReducer(state =[], action){
  switch (action.type) {
    case 'FETCH_EVENTS':
      let events = state.concat(action.payload)
      return events
    default:
      return state
  }
}
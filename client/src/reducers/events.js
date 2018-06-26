export default (state =[], action)=>{
  switch (action.type) {
    case 'FETCH_EVENTS':
      let events = action.events
      return events
    default:
      return state
  }
}
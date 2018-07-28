import initialState from './initialState'

export default function eventsReducer(state=initialState.events, action){
  switch (action.type) {
    case 'FETCH_EVENTS':
      let events = action.payload
      return events
    case 'EVENTS_LOAD_FAILURE':
      return state
    case 'CREATE_EVENT_REQUEST':
      return state
    case 'CREATE_EVENT_SUCCESS':
      // create new events array with new event added
      return state
    case 'CREATE_EVENT_FAILURE':
      return state
    case 'UPDATE_EVENT_REQUEST':
      return state      
    case 'UPDATE_EVENT_SUCCESS':
      // create new events array and replace existing event with modified event
      return state        
    case 'UPDATE_EVENT_FAILURE':
      return state    
    case 'DESTROY_EVENT_REQUEST':
      return state
    case 'DESTROY_EVENT_SUCCESS':
      // create new events array ommitting destroyed event
      return state          
    case 'DESTROY_EVENT_FAILURE':
      return state
    default:
      return state
  }
}
import initialState from './initialState'
let events;

export default function eventsReducer(state=initialState.events, action){
  switch (action.type) {
    case 'FETCH_EVENTS_REQUEST': 
      return state
    case 'FETCH_EVENTS_SUCCESS':
      return [...state, ...action.payload]
    case 'FETCH_EVENTS_FAILURE': 
      return state  
    case 'EVENTS_LOAD_FAILURE':
      return state
    case 'CREATE_EVENT_REQUEST':
      return state
    case 'CREATE_EVENT_SUCCESS':
      return [...state, action.payload]
    case 'CREATE_EVENT_FAILURE':
      return state
    default:
      return state
  }
}

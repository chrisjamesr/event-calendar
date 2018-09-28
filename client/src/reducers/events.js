import initialState from './initialState'

export default function eventsReducer(state=initialState.events, action){
  switch (action.type) {
    case 'FETCH_EVENTS_REQUEST': 
      return {...state, loading: true}
    case 'FETCH_EVENTS_SUCCESS':
      return {events: action.payload, loading: false}
    case 'FETCH_EVENTS_FAILURE': 
      return {...state, loading: false}
    case 'EVENTS_LOAD_FAILURE':
      return state
    case 'CREATE_EVENT_REQUEST':
      return {...state, loading: true}
    case 'CREATE_EVENT_SUCCESS':
      return {events:[...state, action.payload], loading: false}
    case 'CREATE_EVENT_FAILURE':
      return {...state, loading: true}
    default:
      return state
  }
}

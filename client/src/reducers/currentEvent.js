import initialState from './initialState'

export default function currentEventReducer(state=initialState.currentEvent, action){  

  const emptyEvent = {
    name: '',
    date_time: '',
    location: '',
    description: ''
  }
  switch (action.type) {
  case 'SHOW_EVENT_REQUEST':
    return {...state, loading: true}
  case 'SHOW_EVENT_SUCCESS':
    return {currentEvent: action.payload, loading: false}
  case 'SHOW_EVENT_FAILURE':
    return state        
  case 'UPDATE_EVENT_REQUEST':
    return {...state, loading: true}
  case 'UPDATE_EVENT_SUCCESS':
    // create new events array and replace existing event with modified event
    return {currentEvent: action.payload, loading: false}
  case 'UPDATE_EVENT_FAILURE':
    return state    
  case 'DELETE_EVENT_REQUEST':
    return {...state, loading: true}
  case 'DELETE_EVENT_SUCCESS':
    // create new events array ommitting destroyed event
    return {currentEvent: emptyEvent, loading: false}
  case 'DELETE_EVENT_FAILURE':
    return state
   case 'CLEAR_EVENT': 
   return {currentEvent: emptyEvent, loading: false}
  case 'CREATE_RSVP_REQUEST':
    return state
  case 'CREATE_RSVP_SUCCESS':
    return {currentEvent: {...state.currentEvent, user_events: [...state.currentEvent.user_events,action.payload]}, loading: false}
  case 'CREATE_RSVP_FAILURE':
    return state  
  case 'UPDATE_RSVP_REQUEST':
    return {...state, loading: false}
  case 'UPDATE_RSVP_SUCCESS':
    let rsvps = state.currentEvent.user_events.map((ue, i, arr) =>{
      return ue.id === action.payload.id ? action.payload : ue
    })          
    return {currentEvent: {...state.currentEvent, user_events: rsvps}, loading: false}
  case 'UPDATE_RSVP_FAILURE':
    return state   
  default:
    return state
  }      
}


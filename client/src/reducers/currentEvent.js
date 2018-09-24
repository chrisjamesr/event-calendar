import initialState from './initialState'

export default function currentEventReducer(state=initialState.currentEvent, action){  

  const emptyEvent = {
    id: '',
    name: '',
    date_time: '',
    location: '',
    description: ''
  }
  switch (action.type) {
  case 'SHOW_EVENT_REQUEST':
    return state
  case 'SHOW_EVENT_SUCCESS':
    return action.payload
  case 'SHOW_EVENT_FAILURE':
    return state        
  case 'UPDATE_EVENT_REQUEST':
    return state      
  case 'UPDATE_EVENT_SUCCESS':
    // create new events array and replace existing event with modified event
    return action.payload
  case 'UPDATE_EVENT_FAILURE':
    return state    
  case 'DELETE_EVENT_REQUEST':
    return state
  case 'DELETE_EVENT_SUCCESS':
    // create new events array ommitting destroyed event
    return emptyEvent   
  case 'DELETE_EVENT_FAILURE':
    return state
   case 'CLEAR_EVENT': 
   return emptyEvent
  case 'CREATE_RSVP_REQUEST':
    return state
  case 'CREATE_RSVP_SUCCESS':
    event = Object.assign({}, state, {user_events: [...state.user_events, action.payload]})
    return event
  case 'CREATE_RSVP_FAILURE':
    return state  
  case 'UPDATE_RSVP_REQUEST':
    return state
  case 'UPDATE_RSVP_SUCCESS':
    let rsvps = state.user_events.map((ue, i, arr) =>{
      return ue.id === action.payload.id ? action.payload : ue
    })      
    
    event = Object.assign({}, state, {
      user_events: rsvps      
      }
    )
    return event
  case 'UPDATE_RSVP_FAILURE':
    return state   
  default:
    return state
  }      
}


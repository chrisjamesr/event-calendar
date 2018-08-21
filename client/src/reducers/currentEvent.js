import initialState from './initialState'

export default function currentEventReducer(state=initialState.currentEvent, action){  
  let event;  
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
  case 'CREATE_RSVP_REQUEST':
    return state
  case 'CREATE_RSVP_SUCCESS':
    event = Object.assign({}, state, {user_events: [...state.user_events, action.payload.user_event]})
    return event
  case 'CREATE_RSVP_FAILURE':
    return state  
  case 'DESTROY_RSVP_REQUEST':
    return state
  case 'DESTROY_RSVP_SUCCESS':
    event = Object.assign({}, state, {
      user_events: state.user_events.filter(ue => {
        ue.rsvp_id !== action.payload.user_event.id
      })
    })
    return event
  case 'DESTROY_RSVP_FAILURE':
    return state   
  default:
    return state
  }      
}
import initialState from './initialState'

export default function rsvpReducer(state=initialState.rsvps, action){  
  let rsvps;
  switch (action.type) {
    case 'FETCH_USER_RSVPS_REQUEST':
      return state
    case 'FETCH_USER_RSVPS_SUCCESS':
      return action.payload
    case 'FETCH_USER_RSVPS_FAILURE':
      return state    
    case 'CREATE_RSVP_REQUEST':
      return state
    case 'CREATE_RSVP_SUCCESS':
      rsvps = [...state, action.payload]
      return state  
    case 'CREATE_RSVP_FAILURE':
      return state  
    case 'DESTROY_RSVP_REQUEST':
      return state
    case 'DESTROY_RSVP_SUCCESS':
      rsvps = state.filter(r=> r.id !== action.payload.id)
      return rsvps
    case 'DESTROY_RSVP_FAILURE':
      return state   
    default:
      return state
  }      
}
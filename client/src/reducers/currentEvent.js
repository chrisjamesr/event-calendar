import initialState from './initialState'

export default function currentEventReducer(state=initialState.currentEvent, action){  
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
  default:
    return state
  }      
}
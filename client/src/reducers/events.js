import initialState from './initialState'
let events;

export default function eventsReducer(state=initialState.events, action){
  switch (action.type) {
    case 'FETCH_EVENTS':
      return action.payload
    case 'EVENTS_LOAD_FAILURE':
      return state
    case 'CREATE_EVENT_REQUEST':
      return state
    case 'CREATE_EVENT_SUCCESS':
      return [...state, action.payload]
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

// state = [   
//   { id: event.id,
//     name: event.name,
//     description: event.description,
//     location: event.location,
//     date_time: event.date_time
//   }, {event}, {event}
// ]

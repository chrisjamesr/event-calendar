import EventAPI from '../api/eventAPI'
 
export function fetchEvents(){
  return function(dispatch){
    dispatch({type: 'FETCH_EVENTS_REQUEST'});
    return EventAPI.getEventsIndex()
      .catch(error=>{
        dispatch({
          type: 'FETCH_EVENTS_FAILURE',
          payload: error.statusText
        })
        console.error(error)
        return Promise.reject()
      })     
      .then(events => dispatch({
        type: 'FETCH_EVENTS_SUCCESS',
        payload: events
      })
    ) 
  }
}

export function createEvent(event){
  return function(dispatch){
    dispatch({type: 'CREATE_EVENT_REQUEST'});
    return EventAPI.postNewEvent(event)
      .catch(error=>{
        dispatch({
          type: 'CREATE_EVENT_FAILURE',
          payload: error
        })
        console.error(error)
        return Promise.reject()
      })  
      .then(event => dispatch({
        type: 'CREATE_EVENT_SUCCESS',
        payload: event
      })
    ) 
  }
}
export function readEvent(history, eventId){
  return function(dispatch){
    dispatch({type: 'SHOW_EVENT_REQUEST'});
    return EventAPI.getEvent(eventId)
    .catch(error=>{
        dispatch({
          type: 'SHOW_EVENT_FAILURE',
          payload: error.statusText
        })
        console.error(error)
        return Promise.reject()
      })  
      .then(event => {
        dispatch({
        type: 'SHOW_EVENT_SUCCESS',
        payload: event
      })
    }) 
  }
}

export function destroyEvent(event){
  return function(dispatch){
    dispatch({type: 'DESTROY_EVENT'});
  }
}


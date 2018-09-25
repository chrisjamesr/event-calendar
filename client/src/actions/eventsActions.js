import EventAPI from '../api/eventAPI'
 
export function fetchEvents(){
  return function(dispatch){
    dispatch({type: 'FETCH_EVENTS_REQUEST'});
    return EventAPI.getEventsIndex()
      .catch(error=>{
        dispatch({
          type: 'FETCH_EVENTS_FAILURE',
          message: error.statusText
        })
        console.error(error.statusText)
        return Promise.reject()
      })     
      .then(events => dispatch({
        type: 'FETCH_EVENTS_SUCCESS',
        payload: events
      })
    ) 
  }
}

export function fetchUserEvents(user_id){
  return function(dispatch){
    dispatch({type: 'FETCH_EVENTS_REQUEST'});
    return EventAPI.getUserEventsIndex(user_id)
      .catch(error=>{
        dispatch({
          type: 'FETCH_EVENTS_FAILURE',
          message: error.statusText
        })
        console.error(error.statusText)
        return Promise.reject()
      })     
      .then(events => dispatch({
        type: 'FETCH_EVENTS_SUCCESS',
        payload: events
      })
    ) 
  }
}

export function createEvent( event, history){
  return function(dispatch){
    dispatch({type: 'CREATE_EVENT_REQUEST'});
    return EventAPI.postNewEvent(eventWithTimezone(event))
      .catch(error=>{
        dispatch({
          type: 'CREATE_EVENT_FAILURE',
          message: error
        })
        console.error(error.statusText)
        return Promise.reject()
      })  
      .then(event => {
        dispatch({
          type: 'CREATE_EVENT_SUCCESS',
          payload: event
      })
      history.push(`/events/${event.id}`) 
    }) 
  }
}
export function readEvent(eventId, history){
  return function(dispatch){
    dispatch({type: 'SHOW_EVENT_REQUEST'});
    return EventAPI.getEvent(eventId)
    .catch(error=>{
        dispatch({
          type: 'SHOW_EVENT_FAILURE',
          message: error.statusText
        })
        console.error(error.statusText)
        return Promise.reject()
      })  
      .then(event => {
        dispatch({
        type: 'SHOW_EVENT_SUCCESS',
        payload: event
      })
      history.push(`/events/${event.id}`)   
    }) 
  }
}

export function updateEvent(event, history){
  return function(dispatch){
    dispatch({type: 'UPDATE_EVENT_REQUEST'});
    return EventAPI.putEvent(eventWithTimezone(event))
    // return EventAPI.putEvent(event)
    .catch(error=>{
        dispatch({
          type: 'UPDATE_EVENT_FAILURE',
          message: error.statusText
        })
        console.error(error.statusText)
        return Promise.reject()
      })  
      .then(event => {
        dispatch({
        type: 'UPDATE_EVENT_SUCCESS',
        payload: event
      })
      history.push(`/events/${event.id}`)   
    }) 
  }
}

export function clearCurrentEvent(){
  return function(dispatch){
    dispatch({type: 'CLEAR_EVENT'})
  }
}

export function destroyEvent(event, history){
  return function(dispatch){
    dispatch({type: 'DELETE_EVENT_REQUEST'});
    return EventAPI.deleteEvent(event)
    .catch(error=>{
        dispatch({
          type: 'DELETE_EVENT_FAILURE',
          message: error.statusText
        })
        console.error(error.statusText)
        return Promise.reject()
      })  
      .then(event => {
        dispatch({
        type: 'DELETE_EVENT_SUCCESS',
        payload: event
      })
      history.push("/events")     
    })   
  }
}

const eventWithTimezone = (event)=>{
  event.date_time = new Date(event.date_time).toUTCString()
  console.log(event)
  return event
}


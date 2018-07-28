import fetch from 'isomorphic-fetch'
import EventAPI from '../api/eventAPI'
 
export function fetchEvents(){
  return function(dispatch){
    dispatch({type: 'LOADING_EVENTS'});
    return EventAPI.getEventsIndex()
      .catch(error=>{
        dispatch({
          type: 'EVENTS_LOAD_FAILURE',
          payload: error.statusText
        })
        console.error(error)
        return Promise.reject()
      })     
      .then(events => dispatch({
        type: 'FETCH_EVENTS',
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
          payload: error.statusText
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

export function destroyEvent(event){
  return function(dispatch){
    dispatch({type: 'DESTROY_EVENT'});
    return fetch('')
  }
}
import fetch from 'isomorphic-fetch'

export function fetchEvents(){
  return function(dispatch){
    dispatch({type: 'LOADING_EVENTS'});
    return fetch('http://localhost:3000/api/events')
      .then(response => response.json())
      .then(events => dispatch({
        type: 'FETCH_EVENTS',
        payload: events
      })
    ) 
  }
}

export function createEvent(event){
  return function(dispatch){
    dispatch({type: 'CREATE_EVENT'});
    return fetch('http://localhost:3000/api/events',{
      body: JSON.stringify(event),
      headers: { 'content-type': 'application/json' },
      method: 'POST'
    })
      .then(response => response.json())
      .then(events => dispatch({
        type: 'CREATE,EVENT',
        payload: event
      })
    ) 
  }
}
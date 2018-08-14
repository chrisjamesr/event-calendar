import rsvpAPI from '../api/rsvpAPI'

export function createRSVP(eventId){
  return function(dispatch){
    dispatch({type: 'CREATE_RSVP_REQUEST'});
    return rsvpAPI.postCreateRsvp(sessionStorage.jwt, eventId)
    .catch(error=>{
      dispatch({
        type: 'CREATE_RSVP_FAILURE',
        payload: error.statusText
      })
      console.error(error)
      return Promise.reject()
    })
    .then(event => {
      dispatch({
        type: 'CREATE_RSVP_SUCCESS',
        payload: event
      })
    })
  }
}

export function destroyRSVP(eventId, userId){
  return function(dispatch){
    dispatch({type: 'DESTROY_RSVP_REQUEST'});
    return rsvpAPI.postDestroyRsvp(sessionStorage.jwt, eventId)
    .catch(error=>{
      dispatch({
        type: 'DESTROY_RSVP_FAILURE',
        payload: error.statusText
      })
      console.error(error)
      return Promise.reject()
    })
    .then(event => {
      dispatch({
        type: 'DESTROY_RSVP_SUCCESS',
        payload: event
      })
    })
  }
}
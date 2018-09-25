import rsvpAPI from '../api/rsvpAPI'

export function createRSVP(eventId){
  return function(dispatch){
    dispatch({type: 'CREATE_RSVP_REQUEST'});
    return rsvpAPI.postCreateRsvp(eventId)
    .catch(error=>{
      dispatch({
        type: 'CREATE_RSVP_FAILURE',
        message: error.statusText
      })
      console.error(error.statusText)
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

export function updateRSVP(eventId, rsvpId){
  return function(dispatch){
    dispatch({type: 'UPDATE_RSVP_REQUEST'});
    return rsvpAPI.postUpdateRsvp(eventId, rsvpId)
    .catch(error=>{
      dispatch({
        type: 'UPDATE_RSVP_FAILURE',
        message: error.statusText
      })
      console.error(error.statusText)
      return Promise.reject()
    })
    .then(event => {
      dispatch({
        type: 'UPDATE_RSVP_SUCCESS',
        payload: event
      })
    })
  }
}
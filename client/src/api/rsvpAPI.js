import {tokenHeader, handleError} from './apiUtils'

class RsvpAPI {

  static postCreateRsvp(eventId){
    const createRSVP = new Request(`http://localhost:3000/api/rsvp`,{
      headers: tokenHeader(),
      method: 'POST',
      body: JSON.stringify({
        user_event: { 
          event_id: eventId
        }
      })
    })
    return fetch(createRSVP).then(handleError)
      .then(response=>{
        return response.json()
    })
  }

  static postDestroyRsvp(eventId, rsvpId){
    const destroyEvent = new Request(`http://localhost:3000/api/rsvp/${rsvpId}`,{
      headers: tokenHeader(),
      method: 'DELETE',
      body: JSON.stringify({
        user_event: { 
          id: rsvpId, 
          event_id: eventId
        }
      })
    })
    return fetch(destroyEvent).then(handleError)
      .then(response=>{
        return response.json()
    }) 
  }
}

export default RsvpAPI
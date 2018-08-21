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

  static postUpdateRsvp(eventId, rsvpId){
    const updateRSVP = new Request(`http://localhost:3000/api/rsvp/${rsvpId}`,{
      headers: tokenHeader(),
      method: 'PATCH',
      body: JSON.stringify({
        user_event: { 
          id: rsvpId, 
          event_id: eventId
        }
      })
    })
    return fetch(updateRSVP).then(handleError)
      .then(response=>{
        return response.json()
    }) 
  }
}

export default RsvpAPI
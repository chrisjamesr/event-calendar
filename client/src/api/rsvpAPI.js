import {tokenHeader, handleError, loggedIn} from './apiUtils'

class RsvpAPI {

  static postCreateRsvp(jwt,eventId){
    const createRSVP = new Request(`http://localhost:3000/api/rsvp`,{
      headers: tokenHeader(),
      method: 'POST',
      body: JSON.stringify({
        rsvp: { 
          jwt: jwt, 
          event_id: eventId
        }
      })
    })
    return fetch(createRSVP).then(handleError)
      .then(response=>{
        return response.json()
    })
  }

  static postDestroyRsvp(jwt, eventId){
    const destroyEvent = new Request(`http://localhost:3000/api/rsvp`,{
      headers: tokenHeader(),
      method: 'DELETE',
      body: JSON.stringify({
        rsvp: { 
          jwt: jwt, 
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
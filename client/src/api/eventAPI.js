class EventAPI {

  static tokenHeader(){
    return !!sessionStorage.jwt ? ({
      "Authorization": `Bearer ${sessionStorage.jwt}`,
      "Content-Type": "application/json"
    }) : {"Content-Type": "application/json"}
  }

  static getEventsIndex(){
    const eventsIndexRequest = new Request('http://localhost:3000/api/events',{
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
      })
    return fetch(eventsIndexRequest).then(handleError)
      .then(response=> {
        return response.json() 
    })
  }

  static postNewEvent(event){
    const newEventRequest = new Request('http://localhost:3000/api/events',{
      headers: this.tokenHeader(),
      method: 'POST',
      body: JSON.stringify({'event':event})
      })
    return fetch(newEventRequest).then(handleError)
      .then(response=> {
        return response.json() 
    })
  }

  static getEvent(eventId){
    const getEventRequest = new Request(`http://localhost:3000/api/events/${eventId}`,{
      headers: this.tokenHeader(),
      method: 'GET'
      })
    return fetch(getEventRequest).then(handleError)
      .then(response=> {
        return response.json() 
    }) 
  }

  static rsvpEvent(jwt,eventId){
    const postEventRSVP = new Request(`http://localhost:3000/api/rsvp`,{
      headers: this.tokenHeader(),
      method: 'POST',
      body: JSON.stringify({
        'rsvp': { 
          'jwt': jwt, 
          'event_id': eventId
        }
      })
    })
    return fetch(postEventRSVP).then(handleError)
      .then(response=>{
        return response.json()
    })
  }
  

}

export default EventAPI

function handleError(response){
  if (!response.ok) {
    throw Error(response.statusText);
    console.log(response.statusText)
  } 
  return response
}
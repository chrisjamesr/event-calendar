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

  static getEvent(eventID){
    const getEventRequest = new Request(`http://localhost:3000/api/events/${eventID}`,{
      headers: this.tokenHeader(),
      method: 'GET'
      })
    return fetch(getEventRequest).then(handleError)
      .then(response=> {
        return response.json() 
    }) 
  }

  static rsvpEvent(jwt, eventID){
    const postEventRSVP = new Request(`http://localhost:3000/api/rsvp/${eventID}`,{
      headers: this.tokenHeader(),
      method: 'POST',
      body: {"rsvp": 
        {
          "event_id": eventID
        }
      }
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
  } 
  return response
}
import {tokenHeader, handleError} from './apiUtils'

class EventAPI {

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
      headers: tokenHeader(),
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
      headers: tokenHeader(),
      method: 'GET'
      })
    return fetch(getEventRequest).then(handleError)
      .then(response=> {
        return response.json() 
    }) 
  }

  static patchEvent(event){
    const patchEventRequest = new Request(`http://localhost:3000/api/events/${event.id}`,{
      headers: tokenHeader(),
      method: 'PATCH',
      body: JSON.stringify(event)
    })
    return fetch(patchEventRequest).then(handleError)
      .then(response=>{
        return response.json
      })
  }
}

export default EventAPI
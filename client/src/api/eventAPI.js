import {tokenHeader, handleError} from './apiUtils'

class EventAPI {

  static getEventsIndex(){
    const eventsIndexRequest = new Request('/api/events',{
      headers: { 'Content-Type': 'application/json' },
      method: 'GET'
      })
    return fetch(eventsIndexRequest).then(handleError)
      .then(response=> {
        return response.json() 
    })
  }

  static getUserEventsIndex(user_id){
    const eventsIndexRequest = new Request(`/api/users/${user_id}/events`,{
      headers: tokenHeader(),
      method: 'GET'
      })
    return fetch(eventsIndexRequest).then(handleError)
      .then(response=> {
        return response.json() 
    })
  }

  static postNewEvent(event){
    const newEventRequest = new Request('/api/events',{
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
    const getEventRequest = new Request(`/api/events/${eventId}`,{
      headers: tokenHeader(),
      method: 'GET'
      })
    return fetch(getEventRequest).then(handleError)
      .then(response=> {
        return response.json() 
    }) 
  }

  static putEvent(event){
    const patchEventRequest = new Request(`/api/events/${event.id}`,{
      headers: tokenHeader(),
      method: 'PUT',
      body: JSON.stringify(event)
    })
    return fetch(patchEventRequest).then(handleError)
      .then(response=>{
        return response.json()
      })
  }

  static deleteEvent(event){
    const deleteEventRequest = new Request(`/api/events/${event.id}`,{
      headers: tokenHeader(),
      method: 'DELETE',
      body: JSON.stringify(event)
    })
    return fetch(deleteEventRequest).then(handleError)
      .then(response=>{
        return response.json
      })
  }
}

export default EventAPI
import React from 'react'

const EventTile=({event})=>{
  return (
    <div>
      <h3>{event.name}</h3>
      <p>{event.date}, {event.time}</p>
      <p>{event.location}</p>
      <p>{event.notes}</p>
    </div>
  )
}

export default EventTile
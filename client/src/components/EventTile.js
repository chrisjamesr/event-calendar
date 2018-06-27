import React from 'react'
import '../styles/eventTile.css'

const EventTile=({event})=>{
  return (
    <div className="EventTile">
      <aside className="Event-sidebar">
        <div className="Event-date-header">{event.date}</div>
        <div className="Event-time">{event.time}</div> 
      </aside>  
      <main>
        <div className="Event-name-header">
          <h3>{event.name}</h3>
        </div>  
        <div className="Event-details">
          <p>{event.location}</p>
          <p>{event.notes}</p>
        </div> 
      </main>  
    </div>
  )
}

export default EventTile
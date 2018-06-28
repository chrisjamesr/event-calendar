import React from 'react'
import '../styles/eventTile.css'
import moment from 'moment'

const EventTile=({event})=>{
  const day = moment(event.date_time).format("dddd, \n MMMM Do YYYY")
  const time = moment(event.date_time).format( "h:mm a")
  return (
    <div className="EventTile">
      <aside className="Event-sidebar">
        <div className="Event-date-header">
                    
          <p>{day}</p>
          <p>{time}</p>
          
        </div>
        
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
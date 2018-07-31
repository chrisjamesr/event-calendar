import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../../styles/event.css'

const EventShow=({event})=>{
  debugger
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

EventShow.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.nummber,
    name: PropTypes.string,
    notes: PropTypes.string,
    location: PropTypes.string,
    date_time: PropTypes.string    
  })
}

export default EventShow
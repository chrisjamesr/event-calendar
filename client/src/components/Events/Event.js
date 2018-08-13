import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom';
import '../../styles/event.css'
import moment from 'moment'


const Event=({event, match})=>{
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
        <h3>
          <Link to={`/events/${event.id}`}>
            {event.name} 
          </Link>  
        </h3>
          
        </div>  
        <div className="Event-details">
          <p>{event.location}</p>
          <p>{event.notes}</p>
        </div> 
      </main>  
    </div>
  )
}

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.nummber,
    name: PropTypes.string,
    notes: PropTypes.string,
    location: PropTypes.string,
    date_time: PropTypes.string    
  })
}

export default Event
//<Route path={`/events/${event.id}`} render={(...props)=><EventShow event={event}/>} />
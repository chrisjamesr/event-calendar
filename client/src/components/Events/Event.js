import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom';
import '../../styles/event.css'
import {dateTime} from '../../utils/calendar'


const Event=({event, match})=>{
  const display= {
      display: "flex",
      justifyContent: "flexStart",
      alignItems: "space-between"
    }
  return (
    <div style={display}>                    
      <div>
        <span style={{margin: "0 15px 0 10px"}} className="Event-date-header">{dateTime(event.date_time).indexDate}</span>
      </div>
      <div>
        <Link to={`/events/${event.id}`} style={{margin: "0 0 0 10px"}} >
          {event.name} 
        </Link>  
      </div>
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
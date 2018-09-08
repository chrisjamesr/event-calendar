import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route } from 'react-router-dom';
import '../../styles/event-index.css'
import {dateTime} from '../../utils/calendar'


const Event=({event, match})=>{
  
  return (
    <div className="indexed-event">                    
      <div>
        <span title={dateTime(event.date_time).displayDay} className="event-date">{dateTime(event.date_time).indexDate}</span>
      </div>
      <div >
        <Link to={`/events/${event.id}`} className="event-name">
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
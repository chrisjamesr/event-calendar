import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/event-show.css'
import AttendeesComponent from './AttendeesComponent'
import EditButtonComponent from './EditButtonComponent'
 import {dateTime} from '../../utils/calendar'

const EventShow=({event, handleClick, creator, renderRSVP})=>{
    
  const renderAttendees = () => {
    if (event.hasOwnProperty("user_events") && event.user_events.length>0) {
      const attendees = event.user_events.filter(ue=> !!ue.attending) || []
      return (
        <AttendeesComponent 
          rsvps={attendees.map(ue=> ue.username)} 
        />
      )
    }
  }

  const renderEditButton = () => {
    return creator ? <EditButtonComponent eventId={event.id}/> : null
  }

  return (
    <div className="EventTile">

      <aside className="Event-sidebar">
        <div className="Event-date-header">
                   
          <p>{dateTime(event.date_time).displayDay}</p>
          <p>{dateTime(event.date_time).displayTime}</p>
        </div>
      </aside>  
      
      <main>
        <div className="Event-name-header">
          <h3>{event.name}</h3>
          {renderEditButton()}
        </div>  
        <div className="Event-details">
          <p>{event.location}</p>
          <p>{event.description}</p>
        </div> 
        <div>
          {renderRSVP()}
          {renderAttendees()}  
        </div>
      </main>  
    </div>
  )
}

EventShow.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    notes: PropTypes.string,
    location: PropTypes.string,
    date_time: PropTypes.string,
    user_events: PropTypes.array    
  }),
  creator: PropTypes.bool,
  handleClick: PropTypes.func
}

export default EventShow
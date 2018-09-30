import React from 'react'
import PropTypes from 'prop-types'
import '../../styles/event-show.css'
import AttendeesComponent from './AttendeesComponent'
import EditButtonComponent from './EditButtonComponent'
 import {dateTime} from '../../utils/calendar'

const EventShow=({event, handleRSVPClick, creator, renderRSVP})=>{
    
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
    return creator ? <EditButtonComponent id="edit-button" eventId={event.id}/> : null
  }

  return (
    <div className="event-show">
      <div className="event-show-header">
        <h1>{event.name}</h1>
          {renderEditButton()}
      </div>      
      
      <p className="event-property event-datetime">
        <label>Date & Time:</label>
        <span>{dateTime(event.date_time).displayDay} -- {dateTime(event.date_time).displayTime}</span>
      </p>
      <p className="event-property event-location">
        <label>Location:</label>
        <span>{event.location}</span>
      </p>
      <p className="event-property event-description">
        <label>Description:</label>
        <span>{event.description}</span>
      </p>
      {renderRSVP()}
      {renderAttendees()}  
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
  handleRSVPClick: PropTypes.func
}

export default EventShow
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import '../../styles/event.css'
import RSVPComponent from './RSVPComponent'
import AttendeesComponent from './AttendeesComponent'

const EventShow=({event, handleClick, attending})=>{
  const day = moment(event.date_time).format("dddd, \n MMMM Do YYYY")
  const time = moment(event.date_time).format( "h:mm a")
  
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
        <div>
          <RSVPComponent 
            handleClick={handleClick} 
            attending={attending ? 1 : 0} 
          /> 
          {renderAttendees()}  

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
    date_time: PropTypes.string,
    user_events: PropTypes.array    
  }),
  attending: PropTypes.bool,
  handleClick: PropTypes.func
}

export default EventShow
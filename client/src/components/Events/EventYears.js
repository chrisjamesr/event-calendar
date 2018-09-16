import React from 'react'
import EventsList from './EventsList'
import PropTypes from 'prop-types'

const EventYears = ({events}) => {
  const renderEventYears = Object.keys(events).map((event, i)=>{
      return <EventsList key={i} year={event} events={events[event]}/>
    })

  return (
    <div className="container">
      <div className="title-bar">
      <h1>Events List</h1>      
      </div>
      <div className="events-list-container">
        {renderEventYears} 
      </div>  
    </div>    
  )
}
EventsList.propTypes = {
  event: PropTypes.arrayOf(PropTypes.object)
}

export default EventYears
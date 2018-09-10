import React from 'react'
import EventsList from './EventsList'
import PropTypes from 'prop-types'

const EventYears = ({events}) => {

  let eventObject = {}
  const eventsByYear = events.forEach((element)=>{
    if (Object.keys(eventObject).includes(new Date(element.date_time).getFullYear().toString())) {
      eventObject[new Date(element.date_time).getFullYear()].push(element)
    } else {
      eventObject[new Date(element.date_time).getFullYear()] = Array.of(element)
    }
  })
  const renderEventYears = Object.keys(eventObject).map((element)=>{
      return <EventsList year={element} events={eventObject[element]}/>
    })

  return (
    <div className="container">
      <div className="title-bar">
      <h1>Events List</h1>
      
      </div>
      <div className="events-list-container">
        <ul>
          {renderEventYears} 
        </ul>
      </div>  
    </div>    
  )
}
EventsList.propTypes = {
  event: PropTypes.arrayOf(PropTypes.object)
}

export default EventYears
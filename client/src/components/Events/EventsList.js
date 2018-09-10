import React from 'react'
import Event from './Event'
import PropTypes from 'prop-types'

const EventsList = ({events, year}) => {
  

  const renderEvents = events.map((e,i)=> <li key={i}><Event key={i} id={e.id} event={e}/></li>)
  return (
    <div>
      <div className="year-header">
        <h3>{year}</h3>
      </div>
      <div className="events-list-container">
        <ul>
          {renderEvents} 
        </ul>
      </div>  
    </div>    
  )
}
EventsList.propTypes = {
  event: PropTypes.arrayOf(PropTypes.object),
  year: PropTypes.string
}

export default EventsList 
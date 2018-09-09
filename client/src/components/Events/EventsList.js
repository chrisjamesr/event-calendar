import React from 'react'
import Event from './Event'
import PropTypes from 'prop-types'

const EventsList = ({events, renderEventShow}) => {
  const renderEvents = events.map((e,i)=> <li key={i}><Event key={i} id={e.id} event={e}/></li>)
  return (
    <div>
      <div>
      <h1>Events List</h1>
      
      </div>
      <ul>
        {renderEvents} 
      </ul>  
    </div>    
  )
}
EventsList.propTypes = {
  event: PropTypes.arrayOf(PropTypes.object)
}

export default EventsList 

export default EventsList
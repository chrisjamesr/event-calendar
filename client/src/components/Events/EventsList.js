import React from 'react'
import Event from './Event'
import PropTypes from 'prop-types'

const EventsList = ({events, renderEventShow}) => {
  const renderEvents = events.map((e,i)=> <Event key={i} id={e.id} event={e}/>)
  return (
    <div>
      <div>
      <h1>Events List</h1>
      
      </div>
        {renderEvents} 
    </div>    
  )
}
EventsList.propTypes = {
  event: PropTypes.arrayOf(PropTypes.object)
}

export default EventsList
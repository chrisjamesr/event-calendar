import React from 'react'
import Event from './Event'
const EventsList = ({events}) => {
  const renderEvents = events.map((e,i)=> <Event key={i} id={e.id} event={e}/>)
  return (
    <div>
      <h1>Events List</h1>
        {renderEvents} 
    </div>    
  )
}

export default EventsList
import React from 'react'
import '../../styles/form.css'
import PropTypes from 'prop-types'

const EventInputComponent = ({handleSubmit, handleChange, handleDelete, event, action}) => {
  const renderDeleteButton = ()=>{
    return action === "Edit" ? (
      <button className="submit-button"
              type="submit" 
              name="destroy-button"               
              onClick={handleDelete}
      >Delete Event</button>
    ) : null
  }
 
  return(
    <div className="container">
      <div className="title-bar">
        <h1>{action} event</h1>
      </div>
      <div className="event-input-form">
        <form className="input-form" onSubmit={handleSubmit}>
          <div className="input-row">
            <label>Name: </label>
            <input type="text" name="name" onChange={handleChange} value={event.name}/>
          </div>
          <div className="input-row">
            <label>Date/Time: </label>
            <input type="datetime-local" name="date_time" onChange={handleChange} value={event.date_time}/>
          </div>
          <div className="input-row">
            <label>Location: </label>
            <input type="text" name="location" onChange={handleChange} value={event.location}/>
          </div>
          <div className="input-row">
            <label>Description: </label>
            <textarea name="description" rows="3" onChange={handleChange} value={event.description}/>
          </div>
          <div className="input-row button-row">
            <button className="submit-button" name="edit-button">{action} Event</button>
            { renderDeleteButton() }          
          </div>  
        </form>
      </div>
       

    </div>
  )
}

EventInputComponent.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  event: PropTypes.shape({
    id: PropTypes.nummber,
    name: PropTypes.string,
    notes: PropTypes.string,
    location: PropTypes.string,
    date_time: PropTypes.string,
    user_events: PropTypes.array    
  }),
  action: PropTypes.string
}


export default EventInputComponent;
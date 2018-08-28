import React from 'react'
import '../../styles/form.css'
import PropTypes from 'prop-types'


const EventInputComponent = ({handleSubmit, handleChange, handleDelete, event, action}) => {
  
  return(
    <div className="input">
      <h1>{action} event</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} value={event.name}/>
        </div>
        <div>
          <label>Date & Time: </label>
          <input type="datetime-local" name="date_time" onChange={handleChange} value={event.date_time}/>
        </div>
        <div>
          <label>Location: </label>
          <input type="text" name="location" onChange={handleChange} value={event.location}/>
        </div>
        <div>  
          <label>Description: </label>
          <textarea name="description" onChange={handleChange} value={event.description}/>
        </div>
        <button name="edit-button">{action} Event</button>

      </form>
        {
          action === "Edit" ? (
            <input type="submit" 
                   name="destroy-button" 
                   value="Delete Event"
                   onClick={handleDelete}
            />
          ) : null
        }  

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
import React from 'react'
import '../styles/EventInput.css'

const CreateEventInput = ({handleSubmit, handleChange}) => {
  
  return(
    <div className="create-input">
      <h1>New event</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Date & Time: </label>
          <input type="datetime-local" name="datetime" onChange={handleChange} />
        </div>
        <div>
          <label>Location: </label>
          <input type="text" name="location" onChange={handleChange} />
        </div>
        <div>  
          <label>Details: </label>
          <textarea name="details" onChange={handleChange} />
        </div>
        <button>Create Event</button>
      </form>

    </div>
  )
}


export default CreateEventInput;
import React from 'react'
import '../styles/form.css'

const CreateEventInput = ({handleSubmit, handleChange}) => {
  
  return(
    <div className="input">
      <h1>New event</h1>
      <form className="input-form" onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div>
          <label>Date & Time: </label>
          <input type="datetime-local" name="date_time" onChange={handleChange} />
        </div>
        <div>
          <label>Location: </label>
          <input type="text" name="location" onChange={handleChange} />
        </div>
        <div>  
          <label>Description: </label>
          <textarea name="description" onChange={handleChange} />
        </div>
        <button>Create Event</button>
      </form>

    </div>
  )
}


export default CreateEventInput;
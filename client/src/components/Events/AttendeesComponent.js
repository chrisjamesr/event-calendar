import React from 'react'
import PropTypes from 'prop-types'

const AttendeesComponent = ({attendees}) => {
  
  if (attendees.length > 0) {
    return (
      <div> 
        <p>Attending...</p>
        {attendees.length > 1 ? attendees.join(", ") : attendees[0] }
      </div>
    )  
  } else return null
}

AttendeesComponent.propTypes = {
  attendees: PropTypes.array
}

export default AttendeesComponent
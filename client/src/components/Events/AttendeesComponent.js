import React from 'react'
import PropTypes from 'prop-types'

const AttendeesComponent = ({rsvps}) => {
  if (rsvps.length > 0) {
    return (
      <div> 
        <p>Attending...</p>
        {rsvps.length > 1 ? rsvps.join(", ") : rsvps[0] }
      </div>
    )  
  } else return null
}

AttendeesComponent.propTypes = {
  rsvps: PropTypes.array
}

export default AttendeesComponent
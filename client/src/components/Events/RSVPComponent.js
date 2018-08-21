import React from 'react'
import PropTypes from 'prop-types'

const RSVPComponent = ({attending, handleClick}) => {
  return (
    <div>
      <input 
        type="submit" 
        name="rsvp" 
        onClick={handleClick} 
        value={attending ? "Attending" : "RSVP" }
      />
    </div>
  )
}

RSVPComponent.propTypes = {
  attending: PropTypes.number,
  handleClick: PropTypes.func
}

export default RSVPComponent
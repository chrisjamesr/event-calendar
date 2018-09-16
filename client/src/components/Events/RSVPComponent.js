import React from 'react'
import PropTypes from 'prop-types'

const RSVPComponent = ({attending, handleClick}) => {
  return (
    <div>
      <button
        className="rsvp-button"
        type="submit" 
        name="rsvp" 
        onClick={handleClick} 
        >{attending ? "RSVP'd" : "RSVP" }
      </button>  
    </div>
  )
}

RSVPComponent.propTypes = {
  attending: PropTypes.bool,
  handleClick: PropTypes.func
}

export default RSVPComponent
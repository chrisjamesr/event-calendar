import React from 'react'
import PropTypes from 'prop-types'

const RSVPComponent = ({attending, handleRSVPClick}) => {
  return (
    <div>
      <button
        className="rsvp-button"
        type="submit" 
        name="rsvp" 
        onClick={handleRSVPClick} 
        >{attending ? "RSVP'd" : "RSVP" }
      </button>  
    </div>
  )
}

RSVPComponent.propTypes = {
  attending: PropTypes.bool,
  handleRSVPClick: PropTypes.func
}

export default RSVPComponent
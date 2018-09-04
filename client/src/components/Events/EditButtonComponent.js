import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const EditButtonComponent = ({eventId}) => {
  return (
    <div>
      {<NavLink to={`/events/${eventId}/edit`} exact className="link"> Edit </NavLink>}
    </div>
  )
}

EditButtonComponent.propTypes = {
  eventId: PropTypes.number
}

export default EditButtonComponent
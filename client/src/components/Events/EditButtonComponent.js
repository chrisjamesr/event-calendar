import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const EditButtonComponent = ({eventId}) => {
  return (
    <NavLink to={`/events/${eventId}/edit`} exact id="edit-button"> Edit </NavLink>
  )
}

EditButtonComponent.propTypes = {
  eventId: PropTypes.number
}

export default EditButtonComponent
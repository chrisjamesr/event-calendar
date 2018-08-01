import React from 'react'
import PropTypes from 'prop-types'

const Month = ({name, year}) => {
  return(
    <div>
    <h1>{name}, {year}</h1>
    </div>
  )
}

// ADD PROPTYPES
Month.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number
}

export default Month
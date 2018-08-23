import React from 'react'
import PropTypes from 'prop-types'

const ToggleAuthLink = ({active, name, onSelectorToggle}) => {  

  function isActive(active){
    return active ? "toggle-link toggle-link-active" : "toggle-link"
  }

  return(
    <a className={isActive(active)} 
       name={name} 
       onClick={(event) => onSelectorToggle(event)}
      > 
       {name} 
    </a>
  )  
}
ToggleAuthLink.propTypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
  onSelectorToggle: PropTypes.func
}
  

  export default ToggleAuthLink
import React from 'react'

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
  

  export default ToggleAuthLink
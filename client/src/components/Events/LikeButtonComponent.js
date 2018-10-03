import React from 'react'

const LikeButtonComponent = ({handleClick, likes}) =>{
  return(
    <button onClick={handleClick}>Likes: {likes}</button>
  )

}

export default LikeButtonComponent
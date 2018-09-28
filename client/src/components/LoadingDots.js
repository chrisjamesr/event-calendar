import React from 'react'
import '../styles/dots.css' 

const LoadingDots =({message})=>{
  return (
    <div className="loading-dots-container">
      <h1>{message}</h1>
      <div className="dots-container">
        <div className="dot one"></div>
        <div className="dot two"></div>
        <div className="dot three"></div>
      </div>
    </div>  
  )
}

export default LoadingDots
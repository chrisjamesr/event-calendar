import React from 'react'
import {NavLink} from 'react-router-dom'
import AuthContainer from '../containers/AuthContainer'

const Home =(props)=> {
  return(
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <h1 className="page-title">Event Calendar!</h1>
      <div style={{margin: 'auto', border: '1px solid black', padding:'20px 40px 30px'}}>
        <h3 style={{textAlign:'center', marginBottom:'15px'}}>Sign In </h3>
        <AuthContainer {...props}/>
      </div>  
      <h3 style={{margin:'10px auto 30px '}}>or</h3>
      <NavLink to="/events" style={{margin:'0 auto 30px'}} className="link">Enter</NavLink>
    </div>
  )
}

export default Home
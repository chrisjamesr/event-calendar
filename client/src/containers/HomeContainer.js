import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import AuthContainer from '../containers/AuthContainer'

class HomeContainer extends React.Component{
  constructor(props){
    super(props)
  }

  renderHome =() =>{

  }
  
  render(){
    return(
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1 className="page-title">Event Calendar!</h1>
        <div style={{margin: 'auto', border: '1px solid black', padding:'20px 40px 30px'}}>
          <h3 style={{textAlign:'center', marginBottom:'15px'}}>Sign In </h3>
          <AuthContainer {...this.props}/>
        </div>  
        <h3 style={{margin:'10px auto 30px '}}>or</h3>
        <NavLink to="/events" style={{margin:'0 auto 30px'}} className="link">Enter</NavLink>
      </div>
    )
  }
}
  const mapStateToProps = ({auth}) =>{
    return {auth}
  }

export default connect(mapStateToProps)(HomeContainer)
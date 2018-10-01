import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn, signUp, logOut } from '../actions/authActions'
import ToggleAuthLink from '../components/Auth/ToggleAuthLink'
import AuthInputComponent from '../components/Auth/AuthInputComponent'
import UserDisplay from '../components/Auth/UserDisplay'

export class AuthContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        password: '',
      },
      selector: 'Log In',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectorToggle = this.handleSelectorToggle.bind(this)
    this.renderToggleAuthLink = this.renderToggleAuthLink.bind(this)
    this.renderAuthInput = this.renderAuthInput.bind(this)
    this.logOut = this.logOut.bind(this)
    this.renderDisplay = this.renderDisplay.bind(this)
    this.renderAuthOptions = this.renderAuthOptions.bind(this)
    this.renderUserDisplay = this.renderUserDisplay.bind(this)
  }

  handleChange = (event) => {  
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }
  
  clearUserState = () => {
    this.setState({
      ...this.state,
      user: {
        email: '',
        password: '',
      }
    })
  }

  // componentDidUpdate(prevProps){
  //   !prevProps.auth && this.props.auth ? this.props.userRSVPs() : null
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.selector === 'Sign Up'){
      this.props.signUp(this.props.history, this.state.user)
    } else if ( this.state.selector === 'Log In'){
      this.props.logIn(this.props.history, this.state.user)
    }  
    this.clearUserState()
  }
  
  handleSelectorToggle = (event) => {
    this.setState({
      ...this.state,
      selector: event.target.name,
    })
  }

  renderToggleAuthLink = (selector) => {
    return ["Sign Up", "Log In"].map( (e, i)=> {
      return (
        <ToggleAuthLink 
          key={i}
          active={selector === e}
          name={e} 
          onSelectorToggle={this.handleSelectorToggle} 
        />
      )                          
    })
  }

  renderAuthInput = (selector) => {
    return (
      <AuthInputComponent 
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        email={this.state.user.email}
        password={this.state.user.password}  
      />  
    )
  }

  logOut = (event) => {
    event.preventDefault()
    this.props.logOut(this.props.history)
    this.clearUserState()
  }

  renderDisplay = () => {
    return null    
  }

  renderAuthOptions = (selector) => {
    return (
      <div className="auth-container">          
        <div className="toggle-user-auth">
          {this.renderToggleAuthLink(selector)}
        </div>
        <div>  
          {this.renderAuthInput(selector)}
        </div>  
      </div>
    )  
  } 

  renderUserDisplay = () => {
    return (
      <UserDisplay
        userName={sessionStorage.username} 
        logOut={this.logOut}    
      />
    )
  }
  renderAuthState = (selector) => {
    if (this.props.auth) {
      return this.renderUserDisplay()
    } else {
      return this.renderAuthOptions(selector)
    }   
  } 

  render(){
    return this.renderAuthState(this.state.selector)
  }

}

const mapStatetoProps = ({auth: {loggedIn, message}}) => {
  return {auth: loggedIn, message}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logIn, signUp, logOut}, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(AuthContainer)
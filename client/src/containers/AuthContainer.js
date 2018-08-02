import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn, signUp, logOut } from '../actions/authActions'
import UserDisplay from '../components/Auth/UserDisplay'
import ToggleAuthLink from '../components/Auth/ToggleAuthLink'
import AuthInputComponent from '../components/Auth/AuthInputComponent'

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

  logOut = () => {
    this.props.logOut(this.props.history)
    this.clearUserState()
  }

  render(){
    return (
      !!this.props.auth ? (
        <UserDisplay 
          userName={sessionStorage.user} 
          logOut={this.logOut}    
        />
      ) : (
        <div className="auth-container">
          <div className="toggle-user-auth">
            {this.renderToggleAuthLink(this.state.selector)}
          </div>
          <div>  
            {this.renderAuthInput(this.state.selector)}
          </div>  
        </div>
      )
    )
  }

}

const mapStatetoProps = ({auth}) => {
  return {auth}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logIn, signUp, logOut}, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(AuthContainer)
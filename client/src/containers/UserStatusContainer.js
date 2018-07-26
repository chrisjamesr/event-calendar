import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn, signUp, logOut } from '../actions/authActions'
import AuthComponent from '../components/AuthComponent'
import UserDisplay from '../components/UserDisplay'
import ToggleAuthLink from '../components/ToggleAuthLink'

export class UserStatusContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      user: {
        email: '',
        password: '',
      },
      selector: 'Sign Up',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectorToggle = this.handleSelectorToggle.bind(this)
    this.renderToggleAuthLink = this.renderToggleAuthLink.bind(this)
     // this.logOut = this.logOut.bind(this)
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
    if (this.state.selector === 'signUp'){
      this.props.signUp(this.state.user)
    } else if ( this.state.selector === 'logIn'){
      this.props.logIn(this.state.user)
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

  // CREATE LOGOUT ACTION
  // ADD LOGOUT TO REDUCER

  // logOut = () => {
  //   this.props.logOut()
  // }

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
            <AuthComponent selector={this.state.selector} 
                           handleSubmit={this.handleSubmit}
                           handleChange={this.handleChange}  
                           password={this.state.user.password}
                           email={this.state.user.email}
                           />
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

export default connect(mapStatetoProps, mapDispatchToProps)(UserStatusContainer)

 // <a className="toggle-link" name="signUp" handleClick={this.toggleAuth}>Sign up</a>
            // <a className="toggle-link" name="logIn" onClick={this.toggleAuth}>Log in</a>
import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn, signUp, logOut } from '../actions/authActions'
import AuthComponent from '../components/AuthComponent'
import UserDisplay from '../components/UserDisplay'

export class UserStatusContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      user: {
        email: '',
        password: '',
      },
      selector: 'signUp',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  onChange = (event) => {  
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [event.target.name]: event.target.value
      }
    })
  }
  
  clearStateUser = () => {
    this.setState({
      ...this.state,
      user: {
        email: '',
        password: '',
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.selector === 'signUp'){
      this.props.signUp(this.state.user)
    } else if ( this.state.selector === 'logIn'){
      this.props.logIn(this.state.user)
    }  
    this.clearStateUser()
  }
  
  toggleAuth = () => {
    if (this.state.selector === 'signUp') {
      this.setState({
        ...this.state,
        selector: 'logIn'
      }) 
    } else {
       this.setState({
        ...this.state,
        selector: 'signUp'
      }) 
    }
  }

  // CREATE LOGOUT ACTION
  // ADD LOGOUT TO REDUCER
  logOut = () =>{
    this.props.logOut()
  }

  render(){

    return (
      !!this.props.auth ? (
        <UserDisplay 
          userName={sessionStorage.user} 
          logOut={this.logOut}    
        />
      ) : (
        <div>
          <div className="toggle-user-auth">
            <a className="toggle-link" onClick={this.toggleAuth}>Sign up</a>
            <a className="toggle-link" onClick={this.toggleAuth}>Log in</a>
          </div>
          <div>  
            <AuthComponent selector={this.state.selector} 
                           handleSubmit={this.onSubmit}
                           handleChange={this.onChange}  
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

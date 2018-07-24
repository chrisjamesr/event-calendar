import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { logIn, signUp } from '../actions/authActions'
// import LoginInput from '../components/LoginInput'
// import SignupInput from '../components/SignupInput'
import AuthComponent from '../components/AuthComponent'
import UserDisplay from '../components/UserDisplay'

export class UserStatusContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      user: {
        email: '',
        password: '',
        name: ''
      },
      selector: 'signUp'
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
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

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.selector === 'signUp'){
      this.props.signUp(this.state.user)
    } else if ( this.state.selector === 'logIn')
    this.props.logIn(this.state.user)
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

  render(){

    return (
      !!this.props.auth ? <UserDisplay /> : (
         <div>
          <div className="toggle-user-auth">
            <button onClick={this.toggleAuth}>Sign up</button>
            <button onClick={this.toggleAuth}>Log in</button>
          </div>
          <div>  
            <AuthComponent selector={this.state.selector} 
                           handleSubmit={this.onSubmit}
                           handleChange={this.onChange}  
                           name={this.state.user.name} 
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
  return bindActionCreators({logIn, signUp}, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(UserStatusContainer)

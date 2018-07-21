import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {signin} from '../actions/authActions'
import LoginInput from '../components/LoginInput'
import SignupInput from '../components/SignupInput'
import UserDisplay from '../components/UserDisplay'

export class UserStatusContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      auth: {
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
      auth: {
        ...this.state.auth,
        [event.target.name]: event.target.value
      }
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.signin({auth: this.state.auth})
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


    let props = {
      handleChange: this.onChange,
      handleSubmit: this.onSubmit,
      email: this.state.auth.email,
      password: this.state.auth.password
    }
  
    if (!!this.props.auth){
      return(
        <UserDisplay />
      )
    } else {
      return (    
        <div>
          <div className="toggle-user-auth">
            <a href="#" onClick={this.toggleAuth}>Sign up</a>
            <a href="#" onClick={this.toggleAuth}>Log in</a>
          </div>
          <div>
            {this.state.selector === "signUp" ? <LoginInput props={props} /> : <SignupInput props={props} />}
          </div>
        </div>
      )  
    }  
  }
}

const mapStatetoProps = ({auth}) => {
  return {auth}
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signin}, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(UserStatusContainer)

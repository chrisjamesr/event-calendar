import React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginInput from '../components/LoginInput'
import {signin} from '../actions/authActions'



export class LoginContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      loggedIn: false,
      auth: {
        email: '',
        password: ''
      }
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

  render(){
    return(
      <div>
        <LoginInput 
          handleChange={this.onChange}
          handleSubmit={this.onSubmit}
          email={this.state.auth.email}
          password={this.state.auth.password}
          />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({signin}, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginContainer)

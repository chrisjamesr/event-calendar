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

  render(){
    if (!!this.props.auth){
      return(
        <UserDisplay />
      )
    } else {
      return (    


        <SignupInput 
          handleChange={this.onChange}
          handleSubmit={this.onSubmit}
          email={this.state.auth.email}
          password={this.state.auth.password}
        />
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

import React from 'react'
import {connect} from 'react-redux'
import LoginError from '../components/Modals/LoginError'
import AuthContainer from './AuthContainer'

class LoginModalContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
    this.displayModal = this.displayModal.bind(this)
    this.autoClose =this.autoClose.bind(this)
    this.handleClose =this.handleClose.bind(this)
  }

  displayModal = () => {
    this.setState(
      {
        show: true
      }, this.autoClose()
    )
  }

  handleClose = () => {
    this.setState({show: false})
  }

  autoClose = () => {
    if (this.state.show === true){
      setTimeout(this.handleClose, 2500)
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.message !== this.props.message) {
      console.log(this.props.message)
      this.displayModal()
    }
  }

  render(){
    return (
      <div>
        <LoginError show={this.state.show} handleClose={this.handleClose} message={this.props.message}/>  
      </div>  
    );
  }  
}

const mapStateToProps = ({auth})=> {
  return {auth: auth.loggedIn, message: auth.message}
}

export default connect(mapStateToProps)(LoginModalContainer)
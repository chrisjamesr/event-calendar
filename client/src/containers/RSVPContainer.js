import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import RSVPComponent from '../components/Events/RSVPComponent'
import {createRSVP, destroyRSVP} from '../actions/eventsActions'

class RSVPContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attending: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.toggleAttending = this.toggleAttending.bind(this)
  }

  handleClick = () => {
    if (this.props.auth){
      if (this.state.attending) {
        this.props.destroyRSVP(this.props.eventId) 
      } else {
        this.props.createRSVP(this.props.eventId) 
      } 
      this.toggleAttending() 
    }
  }

  toggleAttending = () => {
    this.setState({
      attending: !this.state.attending
    })
  }

  render(){
    return (
      <RSVPComponent 
        handleClick={this.handleClick} 
        attending={this.state.attending ? 1 : 0} 
      /> 
    )
  }
}

const mapStateToProps = (state) => {
  return {auth: state.auth }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({createRSVP}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RSVPContainer)
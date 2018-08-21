import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import { readEvent } from '../actions/eventsActions'
import {createRSVP, destroyRSVP} from '../actions/rsvpActions' 
import EventShow from '../components/Events/EventShow'

class EventShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attending: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.toggleAttending = this.toggleAttending.bind(this)
    this.findRSVP = this.findRSVP.bind(this)
  }

  handleClick = () => {
    if (this.props.auth){
      if (this.findRSVP(this.props.event)) {
        this.props.destroyRSVP(this.props.event.id, this.findRSVP(this.props.event).id) 
      } else {
        this.props.createRSVP(this.props.event.id) 
      } 
    }
  }

  toggleAttending = () => {
    !!this.findRSVP() ? this.setState({attending: true}) : this.setState({attending: false})
  }

  componentDidMount(){
    this.props.readEvent(this.props.history, this.props.match.params.id)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.event.hasOwnProperty("user_events")) {
      this.rsvpChange(prevProps, this.props) 
      ? (
        this.setState({
          attending: !!this.findRSVP(this.props.event)
        })
      ) : null
    } else if (this.props.event.hasOwnProperty("user_events")) {
        this.setState({
          attending: !!this.findRSVP(this.props.event)
        })
    }  
  }
  
  rsvpChange(prevProps, currentProps){
    return this.findRSVP(prevProps.event) !== this.findRSVP(currentProps.event)
  }
  
  checkEmpty = (obj) => {
    return Object.keys(obj).length === 0
  }

  findRSVP = (e) => {
    return e.user_events.find(ue => ue.user_id === parseInt(sessionStorage.user_id)) || null
  }  

  render(){
    return (
      <EventShow 
        event={this.props.event} 
        attending = {this.state.attending}
        handleClick={this.handleClick}
      />
    )  
  }

}

const mapStateToProps = ({ currentEvent, auth})=> {
  return {event: currentEvent, auth}
}

const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({readEvent, createRSVP, destroyRSVP}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer)
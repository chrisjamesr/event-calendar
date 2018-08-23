import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import { readEvent } from '../actions/eventsActions'
import {createRSVP, updateRSVP} from '../actions/rsvpActions' 
import EventShow from '../components/Events/EventShow'

class EventShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attending: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.findRSVPAttending = this.findRSVPAttending.bind(this)
    this.findRSVP = this.findRSVP.bind(this)
  }

  handleClick = () => {
    if (this.props.auth){
      if (this.findRSVP(this.props.event)) {
        this.props.updateRSVP(this.props.event.id, this.findRSVP(this.props.event).id) 
      } else {
        this.props.createRSVP(this.props.event.id) 
      } 
    }
  }

  componentDidMount(){
    this.props.readEvent(this.props.history, this.props.match.params.id)
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.event.hasOwnProperty("user_events")) {
      this.rsvpChange(prevProps, this.props) 
      ? (
        this.setState({
          attending: this.findRSVP(this.props.event).attending
        })
      ) : null
    } else if (this.props.event.hasOwnProperty("user_events")) {
        this.setState({
          attending: this.findRSVP(this.props.event).attending
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
     return e.user_events.find(ue=>{
        return ue.user_id === parseInt(sessionStorage.user_id)
    }) || false
  }

  findRSVPAttending = (e) => {
     return this.findRSVP(e).attending || false
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
  return bindActionCreators({readEvent, createRSVP, updateRSVP}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer)
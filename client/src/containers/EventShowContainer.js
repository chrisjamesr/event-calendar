import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { readEvent } from '../actions/eventsActions'
import {createRSVP, updateRSVP} from '../actions/rsvpActions' 
import EventShow from '../components/Events/EventShow'
import RSVPComponent from '../components/Events/RSVPComponent'

class EventShowContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attending: false,
      creator: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.findRSVPAttending = this.findRSVPAttending.bind(this)
    this.findRSVP = this.findRSVP.bind(this)
    this.didCreate = this.didCreate.bind(this)
    this.renderRSVP = this.renderRSVP.bind(this) 
  }

  handleClick = () => {
    if (this.props.auth){
      if (this.findRSVP(this.props.currentEvent)) {
        this.props.updateRSVP(this.props.currentEvent.id, this.findRSVP(this.props.currentEvent).id) 
      } else {
        this.props.createRSVP(this.props.currentEvent.id) 
      } 
    }
  }

  componentDidMount(){
    this.props.readEvent(this.props.match.params.id, this.props.history)
    .then(e=>this.didCreate())
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.currentEvent.hasOwnProperty("user_events")) {
      if (this.rsvpChange(prevProps, this.props) ){
        this.setState({
          ...this.state,
          attending: this.findRSVP(this.props.currentEvent).attending
        })
      } 
    } else if (this.props.currentEvent.hasOwnProperty("user_events")) {
      this.setState(
        {
          ...this.state,
          attending: this.findRSVP(this.props.currentEvent).attending
        }
      )
    }
  }
  
  rsvpChange(prevProps, currentProps){
    return this.findRSVP(prevProps.currentEvent) !== this.findRSVP(currentProps.currentEvent)
  }
  
  checkEmpty = (obj) => {
    return Object.keys(obj).length === 0
  }

  findRSVP = (e) => {
     return e.user_events.find(ue=>{
        return ue.user_id === parseInt(sessionStorage.user_id, 10)
    }) || false
  }

  findRSVPAttending = (e) => {
     return this.findRSVP(e).attending || false
  }

  didCreate = ()=>{
    if (!this.state.creator){
      if (!!this.findRSVP(this.props.currentEvent).creator){
        this.setState({...this.state, creator: true})
      }
    }
  }

  renderRSVP = () =>{
    return this.props.auth ? <RSVPComponent 
            handleClick={this.handleClick} 
            attending={this.state.attending} 
            /> : null
  }  
  

  render(){
    return (
      <EventShow 
        event={this.props.currentEvent} 
        handleClick={this.handleClick}
        creator={this.state.creator}
        renderRSVP={this.renderRSVP}
      />
    )  
  }

}

const mapStateToProps = ({currentEvent:{currentEvent, loading},  auth})=> {
  return {currentEvent, loading, auth}
}

const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({readEvent, createRSVP, updateRSVP}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer)
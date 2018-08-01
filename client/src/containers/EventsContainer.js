import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchEvents, createEvent, readEvent } from '../actions/eventsActions'
import EventsList from '../components/Events/EventsList'


export class EventsContainer extends React.Component {
  constructor(props){
    super(props)

    this.renderEventsList = this.renderEventsList.bind(this)
    
  }

  componentDidMount(){
    this.props.fetchEvents()
  }

  renderEventsList = ()=> {
    return (
      <EventsList events={this.props.events} />    
    )  
  }

  render(){
     return this.renderEventsList()
  }
}

const mapStateToProps=({events})=>{
  return{
    events: events
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({fetchEvents, createEvent, readEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
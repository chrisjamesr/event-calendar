import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/fetchEvents'
import EventsList from '../components/EventsList'


export class EventsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchEvents()
  }

  render(){
    return <EventsList events={this.props.events} />    
  }
}

const mapStateToProps=({events})=>{
  return{
    events: events
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({fetchEvents: fetchEvents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
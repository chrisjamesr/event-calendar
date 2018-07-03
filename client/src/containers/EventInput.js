import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent } from '../actions/fetchEvents'
// import EventsList from '../components/EventsList'


export class EventInput extends React.Component {
  constructor(){
    this.state = {

    }
  }

  componentDidMount(){
    this.props.createEvent()
  }

  render(){
    
  }
}

const mapStateToProps=({events})=>{
  return{
    event: event
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({createEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
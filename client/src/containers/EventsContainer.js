import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/fetchEvents'
import Event from "../components/Event"


export class EventsContainer extends React.Component {
  

  componentDidMount(){
    // call fetch events action

  }

  render(){
    return(
    <div>
      <h1>Events</h1>
      <p></p>
      <Event />
    </div>

    );
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
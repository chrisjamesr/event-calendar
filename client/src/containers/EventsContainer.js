import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/fetchEvents'
import EventTile from "../components/EventTile"


export class EventsContainer extends React.Component {
  

  componentDidMount(){
    this.props.fetchEvents()
  }

  render(){
    const events = this.props.events.map((e,i)=>{
      return <EventTile event={e} key={i} id={e.id}/>
    })

    return(
    <div>
      <h1>Events</h1>
      {events}
      <p></p>
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
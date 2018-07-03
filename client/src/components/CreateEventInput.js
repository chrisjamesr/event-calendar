import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent } from '../actions/fetchEvents'
// import EventsList from '../components/EventsList'


export class EventInput extends React.Component {
  constructor(){
    this.state = {
      event: {
        name: '',
        datetime: '',
        location: '',
        details: ''
      },
    }
  }

  
  componentDidMount(){
    this.props.createEvent(event)
  }

  render(){
    return(
      <div>
        <form>
          <h3>New event</h3>
          <label>Name: </label>
          <input type="text" onChange={} />
          <label>Date & Time: </label>
          <input type="datetime-local" onChange={} />
          <label>Location: </label>
          <input type="text" onChange={} />
          <label>Details: </label>
          <textarea onChange={} />
        </form>
      </div>
    )
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
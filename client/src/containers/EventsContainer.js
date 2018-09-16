import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { fetchEvents, fetchUserEvents, createEvent, readEvent } from '../actions/eventsActions'
import EventYears from '../components/Events/EventYears'


export class EventsContainer extends React.Component {
  constructor(props){
    super(props)

    this.renderEventsList = this.renderEventsList.bind(this)
    this.fetchEventData = this.fetchEventData.bind(this)
    this.eventsObject = this.eventsObject.bind(this)
  }

    eventsObject = (events)=> events.reduce((acc, event)=>{
      if (Object.keys(acc).includes(new Date(event.date_time).getFullYear().toString())) {
          acc[new Date(event.date_time).getFullYear()] = acc[new Date(event.date_time).getFullYear()].concat(event)
      } else {
          acc[new Date(event.date_time).getFullYear()] = Array.of(event)
      }
      return acc
    }, {})

  componentDidMount(){
    this.fetchEventData(this.props.match.params)
  }

  componentDidUpdate(prevProps){
    if (this.props.match.params.hasOwnProperty("id") !== prevProps.match.params.hasOwnProperty("id") ){
      this.fetchEventData(this.props.match.params)
    }
  }
  // componentWillReceiveProps(nextProps){
  //   if (nextProps.match.params.hasOwnProperty("id") !== this.props.match.params.hasOwnProperty("id") ){
  //     this.fetchEventData(nextProps.match.params)
  //   }
  // }
  
  // shouldComponentUpdate(nextProps){
    // Add correct conditional to update on after second call to componentWillReceiveProps
  //   return nextProps.match.params.hasOwnProperty("id") !== this.props.match.params.hasOwnProperty("id")
  // }

  fetchEventData = (params) => {
    if (params.hasOwnProperty("id")) {
      this.props.fetchUserEvents(params.id)
    } else {
      this.props.fetchEvents()
    }  
  }

  renderEventsList = ()=> {
    return (
      // <EventYears events={this.props.events} />    
      <EventYears events={this.eventsObject(this.props.events)} />    
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
  return bindActionCreators({fetchEvents, fetchUserEvents, createEvent, readEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
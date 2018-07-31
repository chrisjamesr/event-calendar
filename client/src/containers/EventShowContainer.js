import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import moment from 'moment'
import { readEvent } from '../actions/eventsActions'
import EventShow from '../components/scheduleView/EventShow'

class EventShowContainer extends React.Component {
  constructor(props){
    super(props)

  }

  componentDidMount(){
    debugger
    this.props.readEvent(this.props.match.params.id)
  }

  render(){
    return  <EventShow event={this.props.event} />
  }

}

const mapStateToProps = (event)=> {
  return {event}
}

const mapDispatchToProps = (dispatch)=> {
  return bindActionCreators({readEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventShowContainer)
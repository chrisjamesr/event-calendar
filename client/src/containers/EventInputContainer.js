import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent } from '../actions/eventsActions'
import EventInputComponent from '../components/Events/EventInputComponent'



export class EventInputContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      event: {
        name: '',
        date_time: '',
        location: '',
        description: ''
      }
      action: 'Create'
    }    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setCurrentEvent = this.setCurrentEvent.bind(this)
  }

  componentDidMount(){
    if (this.props.match.params.hasOwnProperty("id")) {
      if (this.props.currentEvent.hasOwnProperty("id")) { 
        this.props.match.params.id === this.props.currentEvent.id ? (
          this.setState({event: {currentEvent}}))

      }
    }
  }

  setCurrentEvent = (currentEvent) =>{
    this.setState({
      event: {
        name: currentEvent.name,
        date_time: currentEvent.date_time,
        location: currentEvent.location,
        description: currentEvent.description
      },
      action: "Edit"
    })
  }

  // componentWillReceiveProps(nextProps){
  //   debugger    
  // }

  // componentDidUpdate(prevProps){
  //   debugger
  // }

  // shouldComponentUpdate(prevProps, prevState){
  //   debugger
  // }
  checkExistingEvent = () =>{
    return (
      this.props.match.params.hasOwnProperty("id") && this.props.currentEvent.hasOwnProperty("id")
    )
  }

  checkEventMatch = () => {
    return checkExistingEvent() ? (
      this.props.match.params.id === this.props.currentEvent.id ? this.setCurrentEvent(this.props.currentEvent)
    )  
  }

  handleChange = (event) => {
    this.setState({
      ...this.state, 
      event: {
        ...this.state.event,
        [event.target.name]: event.target.value,
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createEvent(this.state.event, this.props.history)
  }

  render(){
    return(
      <div>
        <EventInputComponent //{...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          event={this.state.event}
          action={this.state.action}
        />
      </div>
    )
  }
}

const mapStateToProps=({currentEvent})=>{
  return{ currentEvent: Object.assign({}, currentEvent) }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({createEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInputContainer)
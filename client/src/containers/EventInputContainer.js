import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent, readEvent, updateEvent, destroyEvent } from '../actions/eventsActions'
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
      },
      action: 'Create'
    }    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setCurrentEvent = this.setCurrentEvent.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount(){
    this.props.match.params.hasOwnProperty("id") ? (
      this.props.currentEvent.hasOwnProperty("id") ? (
        parseInt(this.props.match.params.id) === this.props.currentEvent.id ? (
          this.setCurrentEvent(this.props.currentEvent)
        ) : this.props.readEvent( parseInt(this.props.match.params.id), this.props.history)
      ) : this.props.readEvent(parseInt(this.props.match.params.id), this.props.history)
    ) : null    
  }

  setCurrentEvent = (currentEvent) =>{
    this.setState({
      event: {
        id: currentEvent.id,
        name: currentEvent.name,
        date_time: currentEvent.date_time.slice(0,-5),
        location: currentEvent.location,
        description: currentEvent.description
      },
      action: "Edit"
    })
  }

  componentWillReceiveProps(nextProps){
    nextProps.currentEvent !== this.props.currentEvent ? (
      this.setCurrentEvent(nextProps.currentEvent)
    ) : null  
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
    this.state.action === "Create" ? (
      this.props.createEvent(this.state.event, this.props.history)
    ) : this.props.updateEvent(this.state.event, this.props.history)
  }

  handleDelete = (event) => {
    event.preventDefault()
    this.props.destroyEvent(this.state.event, this.props.history)
  }

  render(){
    return(
      <div>
        <EventInputComponent //{...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
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
  return bindActionCreators({createEvent, readEvent, updateEvent, destroyEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInputContainer)
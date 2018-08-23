import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent } from '../actions/eventsActions'
import EventInputComponent from '../components/Events/EventInputComponent'



export class CreateEventContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      event: {
        name: '',
        date_time: '',
        location: '',
        description: ''
      },
    }    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  eventAction = () => {
    // return this.props.match.url.match(/new/) ? "create" :  
  }


  render(){
    return(
      <div>
        <EventInputComponent //{...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          event={this.state.event}
          path={this.props.match.url}
        />
      </div>
    )
  }
}

const mapStateToProps=({event})=>{
  return{
    event: event
  }
}

const mapDispatchToProps=(dispatch)=>{
  return bindActionCreators({createEvent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEventContainer)
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent } from '../actions/eventsActions'
import CreateEventInput from '../components/Events/CreateEventInput'



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

  render(){
    return(
      <div>
        <CreateEventInput {...this.props}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          event={this.state.event}
          //event={this.state.event}
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
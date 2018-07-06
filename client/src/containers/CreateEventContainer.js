import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent } from '../actions/createEvent'
import CreateEventInput from '../components/CreateEventInput'
import '../styles/EventInput.css'


export class CreateEventContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      event: {
        name: '',
        datetime: '',
        location: '',
        details: ''
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
    this.props.createEvent(this.state.event)
  }

  render(){
    return(
      <div>
        <CreateEventInput {...this.props}
          // onSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
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
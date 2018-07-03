import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createEvent } from '../actions/fetchEvents'
import CreateEventInput from '../components/CreateEventInput'


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
  }
  handleChange = (event) => {
    this.setState({
      ...this.state,

    })
  }
  render(){
    return(
      <div>
        <CreateEventInput 
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          event={this.state.event}
        />
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
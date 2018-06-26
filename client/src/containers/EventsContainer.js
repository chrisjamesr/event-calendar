import React from 'react'
import Event from "../components/Event"


export class EventsContainer extends React.Component {
  

  componentDidMount(){
    // call fetch events action

  }

  render(){
    return(
    <div>
      <h1>Events</h1>
      <p></p>
      <Event />
    </div>

    )
  }
}



import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import LikeButtonComponent from './LikeButtonComponent'
import '../../styles/event-index.css'
import {dateTime} from '../../utils/calendar'


class Event extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      likes: 0
    }
    
  }  

  handleLikeClick = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }
  renderLikeButton = () =>{
    return <LikeButtonComponent handleClick={this.props.handleLikeClick} likes={this.state.likes}/>
  }

  render(){  
    return (
      <div className="indexed-event">                    
        
          <span title={dateTime(this.props.event.date_time).displayDay} className="event-date">{dateTime(this.props.event.date_time).indexDate}</span>
        
          <Link to={`/events/${this.props.event.id}`} className="event-name">
            {this.props.event.name} 
          </Link>  
          <LikeButtonComponent handleClick={this.handleLikeClick} likes={this.state.likes}/>
      </div>
    )
  }  
}

Event.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.nummber,
    name: PropTypes.string,
    notes: PropTypes.string,
    location: PropTypes.string,
    date_time: PropTypes.string    
  })
}

export default Event
//<Route path={`/events/${event.id}`} render={(...props)=><EventShow event={event}/>} />
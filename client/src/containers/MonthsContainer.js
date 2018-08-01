import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/eventsActions'
import Month from '../components/Calendar/Month'
import {calendar} from '../utils/calendar'


class MonthsContainer extends React.Component {

  componentDidMount(){
    
  }

  render(){
    const months = calendar;
    
    return(
      <div>
        <h1>Calendar</h1>
        {
          months.map((m,i)=> {
            return <Month id={`${m.monthName}-${m.year}`} key={i} name={m.monthName} year={m.year} month={m.month} /> 
          })
        }
      </div>
    )
  }
}



// export default connect(mapStateToPrsdops, mapDispatchToProps)(MonthsContainer)
export default MonthsContainer
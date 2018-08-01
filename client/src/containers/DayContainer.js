import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/eventsActions'
import Month from '../components/Calendar/Month'
import {calendar} from '../utils/calendar'


class DayContainer extends React.Component {

  componentDidMount(){
    
  }

  render(){
    // const months = calendar;
    
    return(
      <div>
        {
          months.map((m,i)=> {
            return <Month id={`${m.monthName}-${m.year}`} key={i} name={m.monthName} year={m.year} month={m.month} /> 
          })
        }
      </div>
    )
  }
}



// export default connect(mapStateToProps, mapDispatchToProps)(MonthsContainer)
export default DayContainer
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchEvents } from '../actions/fetchEvents'
import Month from '../components/Month'
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



// export default connect(mapStateToPrsdops, mapDispatchToProps)(MonthsContainer)
export default DayContainer
import React from 'react'
import Month from '../components/Month'
import {calendar} from '../utils/calendar'


export default class MonthsContainer extends React.Component {
  render(){
    const months = calendar
    debugger 
    return(
      <div>
        {
          months.map((m,i)=> {
            return <Month id={`${m.monthName}-${m.year}`} key={i} name={m.monthName} year={m.year} /> 
          })
        }
      </div>
    )
  }

}